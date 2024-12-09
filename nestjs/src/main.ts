import { NestFactory } from '@nestjs/core';
import { AppModule } from './controllers/app/app.module';
import InitializeSQLite from 'src/database/init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allows our API requests
  InitializeSQLite(); // initializes database
  await app.listen(process.env.PORT ?? 3000); // start the API
}
bootstrap();
