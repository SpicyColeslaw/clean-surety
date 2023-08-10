import { IPolicyDAO } from "@application/interfaces"

type Params = {
  logActions: string[]
}

type Dependencies = {
  policyDAO: IPolicyDAO
}

export async function getPolicyByLogsUseCase (
  params: Params,
  dependencies: Dependencies,
) {
  // try {
    const policies = await dependencies.policyDAO.readManyByLogAction(params.logActions);

    return policies;
    // // bail out if not eligible
    // if (policy.continuationCertificateEligible) {
    //   throw new Error('Policy not eligible for continuation certificate');
    // }

    // dependencies.queueService.sendMessage({
    //   userName: params.userName,
    //   eventType: 'CERTIFICATE',
    //   messageBody: {
    //     policyId: params.policyId,
    //     userIdToAlert: params.userName,
    //   },
    // });

    // const newLog = {
    //   logAction: 'Continuation Certificate',
    //   logComment: 'Generating new continuation certificate based on current data',
    //   userName: params.userName,
    // }

    // policy.log.push(newLog);

    // dependencies.policyDAO.update(policy);
  // } catch (useCaseError: any) {
  //   dependencies.errorReportingService.reportError({
  //     severity: 'error',
  //     message: useCaseError?.message,
  //     contextData: {},
  //   })
  // }
}
