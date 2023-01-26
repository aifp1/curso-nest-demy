import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //De esta forma el url saldra con api/pokemon...
  app.setGlobalPrefix('api/v2');

  await app.listen(3000);
}
bootstrap();
