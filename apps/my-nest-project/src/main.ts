import { NestFactory } from '@nestjs/core';
import { MyNestProjectModule } from './my-nest-project.module';

async function bootstrap() {
  const app = await NestFactory.create(MyNestProjectModule);
  await app.listen(3000);
}
bootstrap();
