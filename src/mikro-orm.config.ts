import UserEntity from './users/user.entity';
import { Options } from '@mikro-orm/core';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

const MikroOrmConfig: Options = {
  entities: [UserEntity],
  type: 'postgresql',
  dbName: configService.get('DB_NAME'),
  user: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
};

export default MikroOrmConfig;
