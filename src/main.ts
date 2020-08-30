import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('v1/api');

  const options = new DocumentBuilder()
    .setTitle('Backend de Farmacias en Turno')
    .setDescription(
      'Servicio que retorne las farmacias que se encuentran de turno de acuerdo a filtros específicos.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Security
  app.use(helmet());

  await app.listen(3000);
  console.log('Runing on port ==> ', 3000);
}
bootstrap();
