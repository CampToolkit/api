import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe, Logger, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config();
console.log(process.env.DB_USERNAME);
bootstrap();

async function bootstrap() {
  console.log(process.env.DB_USERNAME);
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const logger = new Logger();
  setSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Server is running on port ${process.env.PORT ?? 3000}`);
}

function setSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Camp-Toolkit API')
    .setDescription('Camp-Toolkit API documentation')
    .setVersion('1.0')
    .addTag('sg')
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);
}
