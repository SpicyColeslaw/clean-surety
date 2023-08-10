import {
  IErrorReportingService,
  IQueueService,
  IPolicyDAO,
} from '../interfaces';

type Params = {
  policyId: string,
  userName: string,
}

type Dependencies = {
  queueService: IQueueService,
  errorReportingService: IErrorReportingService,
  policyDAO: IPolicyDAO,
}

export async function generateContCertUseCase (
  params: Params,
  dependencies: Dependencies,
) {
  try {
    const policy = await dependencies.policyDAO.read(params.policyId)

    // bail out if not eligible
    if (policy.continuationCertificateEligible) {
      throw new Error('Policy not eligible for continuation certificate');
    }

    dependencies.queueService.sendMessage({
      userName: params.userName,
      eventType: 'CERTIFICATE',
      messageBody: {
        policyId: params.policyId,
        userIdToAlert: params.userName,
      },
    });

    const newLog = {
      logAction: 'Continuation Certificate',
      logComment: 'Generating new continuation certificate based on current data',
      userName: params.userName,
    }

    policy.log.push(newLog);

    dependencies.policyDAO.update(policy);
  } catch (useCaseError: any) {
    dependencies.errorReportingService.reportError({
      severity: 'error',
      message: useCaseError?.message,
      contextData: {},
    })
  }
}
