export type ReportErrorType = {
  severity: string,
  message: string,
  contextData: object,
}

export interface IErrorReportingService {
  reportError(data: ReportErrorType): boolean;
}