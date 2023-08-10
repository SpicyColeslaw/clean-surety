import Policy from '@domain/entities/Policy';


export default interface PolicyMongoModel extends Policy {
  mongoId: string,
}
