import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionHandler } from './main/http/exceptions';
import { HttpResponseInterceptor } from './main/http/interceptors';

const { API_PORT = 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionHandler())
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  app.enableCors();
  await app.listen(API_PORT);
}
bootstrap().then( () => 
    Logger.log(`The application is running on port: ${ API_PORT }`)
);