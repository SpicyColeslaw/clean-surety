export default interface Policy {
  id: string,
  continuationCertificateEligible: boolean,
  log: [{
    logAction: string,
    logComment: string,
    userName: string,
  }]
}