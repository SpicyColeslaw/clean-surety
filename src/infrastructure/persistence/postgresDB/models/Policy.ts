import Policy from '@domain/entities/Policy';


export default interface PolicyPostgresModel extends Policy {
  sqlId: number,
}
