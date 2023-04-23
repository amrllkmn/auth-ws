import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (confService: ConfigService) => ({
        type: 'postgresql',
        password: confService.getOrThrow('DB_PASSWORD'),
        port: confService.getOrThrow('DB_PORT'),
        user: confService.getOrThrow('DB_USERNAME'),
        host: confService.getOrThrow('DB_HOST'),
        dbName: confService.getOrThrow('DB_NAME'),
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
