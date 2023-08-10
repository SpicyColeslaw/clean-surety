const rabbitMQ = require('rabbit-mq');

import { IQueueService, SendMessageType } from "@application/interfaces";


export default class RabbitMQService implements IQueueService {
  private _rabbitMQParams = {
    someRabbitMQStuff: 'hello',
  };
  private _queueUrl = process.env.SURETY360_SQS_URL;

  public async sendMessage(data: SendMessageType) {
    // some rabbit mq message sender stuff
    return true;
  }; 
}