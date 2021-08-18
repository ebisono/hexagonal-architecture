import { Module } from "@nestjs/common";
import { AdministrationMainModule } from "./administration/administration.main.module";

@Module({
  imports: [
      AdministrationMainModule
  ]
})
export class FeatureMainModule {}
