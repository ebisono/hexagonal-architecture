import { ValueProvider } from '@nestjs/common';
import { EnvType } from '../enums/env.type';
const { NODE_ENV } = process.env;

let env: EnvType = EnvType.DEV;

if ( NODE_ENV === EnvType.PROD ) {
  env = EnvType.PROD;
} else if ( NODE_ENV === EnvType.TEST ) {
  env = EnvType.TEST;
}

export const envProvider: ValueProvider = {
  provide: 'ENV',
  useValue: env,
};
