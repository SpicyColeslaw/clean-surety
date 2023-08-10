const express = require('express');

// import service dependencies
import QueueService from '@infrastructure/services/AwsSqsService';
// import QueueService from '@infrastructure/services/RabbitMQService';
import ErrorReportingService from '@infrastructure/services/AirbrakeService';
import PolicyDAO from '@infrastructure/persistence/mongoDB/daos/PolicyDAO';
// import PolicyDAO from '@infrastructure/persistence/postgresDB/daos/PolicyDAO';

// import route handlers
import {
  generateContCertUseCase
} from '@application/use-cases/GenerateContCertUseCase';

import { getPolicyByLogsUseCase } from '@application/use-cases/GetPolicyLogsByUseCase';

/**
 ** Function to build all api routes
 * @returns {Router}
 */
function buildAPIRouter() {
  const router = new express.Router();

  router.post('/policy/:policyId/generate-cont-cert', (req: any, res: any) => {
    try {
      const { userName } = req.body;
      const { policyId } = req.params;

      const params = {
        policyId,
        userName,
      };

      const dependencies = {
        queueService: new QueueService(),
        errorReportingService: new ErrorReportingService(),
        policyDAO: new PolicyDAO(),
      };

      // route handler use case
      generateContCertUseCase(params, dependencies);

      req.flash('success', 'Successfully Generated Continuation Certificate for Policy!');
      res.status(200).json({ data: {}, success: true });
    } catch (error: any) {
      req.flash('error', `Failed to Generate Contuation Certificate for Policy: ${req.params.policyId}!`);
      res.status(500).json({ error: error.message, success: false });
    }
  });

  router.get('/policy', async (req: any, res: any) => {
    const {
      pizza,
      logActions
    } = req.body;

    // use case
    const params = {
      logActions
    }

    const dependencies = {
      policyDAO: new PolicyDAO(),
    }

    const muhPolicies = await getPolicyByLogsUseCase(params, dependencies)
    res.json({ muhPolicies });
  });

  return router;
}

module.exports = {
  buildAPIRouter,
}
