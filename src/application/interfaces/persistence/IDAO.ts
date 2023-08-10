// the data access object interface to be extended
// by more specific DAO's
export default interface IDAO<Type> {
  create(type: Type): Promise<Type>,
  read(id: string): Promise<Type>,
  update(type: Type): boolean,
  delete(id: string): boolean,
}