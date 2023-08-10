export type SendMessageType = {
  userName: string,
  eventType: string,
  messageBody: object,
}

export interface IQueueService {
  sendMessage(data: SendMessageType): Promise<boolean>;
}