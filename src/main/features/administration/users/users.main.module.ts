import { Module } from "@nestjs/common";
import { UserController } from "src/main/features/administration/users/user.controller";
import { UsersModule } from "src/infrastructure/features/administration/users/users.module";
import { UsersProviders } from "./users.providers";

@Module({
    imports: [
        UsersModule
    ],
    controllers: [
        UserController
    ],
    providers: UsersProviders
})
export class UsersMainModule {}
