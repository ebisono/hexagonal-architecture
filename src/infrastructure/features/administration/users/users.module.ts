import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateUserRepositoryAdapter, FindUserRepositoryAdapter, UpdateUserRepositoryAdapter } from "./repositories";
import { UserEntity } from "./user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          UserEntity
      ])
  ],
  exports: [
      TypeOrmModule,
      CreateUserRepositoryAdapter,
      UpdateUserRepositoryAdapter,
      FindUserRepositoryAdapter
  ],
  providers: [
      CreateUserRepositoryAdapter,
      UpdateUserRepositoryAdapter,
      FindUserRepositoryAdapter
  ]
})
export class UsersModule {}
