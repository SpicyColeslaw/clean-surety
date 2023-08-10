import { IPolicyDAO } from "@application/interfaces";
import PolicyMongoModel from '../models/Policy';

export default class PolicyDAO implements IPolicyDAO {
  async create(policy: PolicyMongoModel): Promise<PolicyMongoModel> {
    return policy;
  }

  async read(policyId: string): Promise<PolicyMongoModel> {
    return {
      id: 'hello',
      mongoId: 'mongo id',
      continuationCertificateEligible: true,
      log: [{
        logAction: 'taking action',
        logComment: 'I have some things to say',
        userName: 'Josh',
      }],
    };
  }

  async readManyByLogAction(logActions: string[]): Promise<PolicyMongoModel[]> {
    return [{
      id: 'hello',
      mongoId: 'mongo id',
      continuationCertificateEligible: true,
      log: [{
        logAction: 'taking action',
        logComment: 'I have some things to say',
        userName: 'Josh',
      }],
    }];
  }

  update(policy: PolicyMongoModel): boolean {
    return true;
  }

  delete(policyId: string): boolean {
    return true;
  }
}