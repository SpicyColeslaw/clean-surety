import { IErrorReportingService, ReportErrorType } from "@application/interfaces";

export default class ErrorReportingService implements IErrorReportingService {
  public reportError(data: ReportErrorType): boolean {
    console.log('reach out to airbrake here and notify');
    return true;
  }
}