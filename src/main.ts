import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // Security
  app.use(helmet());

  await app.listen(3000);
  console.log('Runing on port ==> ', 3000);
}
bootstrap();
