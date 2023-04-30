import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
class UserEntity {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  email: string;

  @Property()
  name: string;

  @Property({ hidden: true })
  password: string;
}

export default UserEntity;
