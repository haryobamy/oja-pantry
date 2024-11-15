import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Oja Pantry Api')
    .setDescription(
      'API documentation for Oja, a platform for perishable goods and foodstuffs',
    )
    .setVersion('1.0')
    // .addTag('marvel'),
    .addBearerAuth() // Optional: Adds JWT auth support in the UI
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}/api/v1`);
}
bootstrap();
