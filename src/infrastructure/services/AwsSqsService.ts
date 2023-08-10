const aws = require('aws-sdk')

import { IQueueService, SendMessageType } from "@application/interfaces";


export default class QueueService implements IQueueService {
  private _sqsServiceParams = {
    apiVersion: '2012-11-05',
    accessKeyId: process.env.SURETY360_SQS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.SURETY360_SQS_SECRET_ACCESS_KEY || '',
    region: process.env.SURETY360_SQS_REGION || '',
  };
  private _queueUrl = process.env.SURETY360_SQS_URL;

  public async sendMessage(data: SendMessageType) {
    try {
      const sqsSendMessageParams = {
        QueueUrl: this._queueUrl,
        MessageBody: data.messageBody,
      };

      const sqs = new aws.SQS(this._sqsServiceParams);
      await new Promise((resolve, reject) => {})
      const awsResponse = await sqs.sendMessage(sqsSendMessageParams);
      return true;
    } catch (awsError: any) {
      console.log(`Uh oh! ${awsError.message}`)
      return false;
    }
  }; 
}