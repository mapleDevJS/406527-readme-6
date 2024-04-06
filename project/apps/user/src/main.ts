import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

const PORT = process.env.PORT || 3000;
const GLOBAL_PREFIX = 'api';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The «User» service')
    .setDescription('User service API')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix(GLOBAL_PREFIX);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('spec', app, document);

  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`);
}

bootstrap();
