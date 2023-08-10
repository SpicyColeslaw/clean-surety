import IDAO from "./IDAO";
import Policy from '@domain/entities/Policy';

export default interface IPolicyDAO extends IDAO<Policy> {
  readManyByLogAction(logActions: string[]): Promise<Policy[]>,
}