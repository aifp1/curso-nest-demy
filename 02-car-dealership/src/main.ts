import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //se definen los Pipes globales para la api
  app.useGlobalPipes(
    new ValidationPipe({
      //Solo deja entrar la data que se esta esperando
      whitelist: true,
      //Envia un error si se le manda data que no se utiliza
      forbidNonWhitelisted: true,
    })
  )

  await app.listen(3000);
}
bootstrap();
