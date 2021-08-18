import { Module } from "@nestjs/common";
import { UsersMainModule } from "./users/users.main.module";

@Module({
  imports: [
      UsersMainModule
  ]
})
export class AdministrationMainModule {}
