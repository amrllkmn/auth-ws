import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export default class UserEntity {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  email: string;

  @Property()
  name: string;

  @Property({ hidden: true })
  password: string;
}
