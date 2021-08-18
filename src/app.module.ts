import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultConnection } from './main/config';
import { MainModule } from './main/main.module';

@Module({
    imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: defaultConnection,
        inject: [ConfigService],
      }),
      MainModule
    ],
  })
export class AppModule {}
