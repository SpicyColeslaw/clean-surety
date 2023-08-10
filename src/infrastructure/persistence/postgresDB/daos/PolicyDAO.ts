import { IPolicyDAO } from "@application/interfaces";
import PolicyPostgresModel from '../models/Policy';

export default class PolicyDAO implements IPolicyDAO {
  async create(policy: PolicyPostgresModel): Promise<PolicyPostgresModel> {
    return policy;
  }

  async read(policyId: string): Promise<PolicyPostgresModel> {
    return {
      id: 'hello',
      sqlId: 8,
      continuationCertificateEligible: true,
      log: [{
        logAction: 'taking action',
        logComment: 'I have some things to say',
        userName: 'Josh',
      }],
    };
  }

  update(policy: PolicyPostgresModel): boolean {
    return true;
  }

  delete(policyId: string): boolean {
    return true;
  }
}