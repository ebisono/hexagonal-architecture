import { Module } from "@nestjs/common";
import { FeatureMainModule } from "./features/feature.main.module";

@Module({
  imports: [ FeatureMainModule ]
})
export class MainModule {}
