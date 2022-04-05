import { NestFactory } from '@nestjs/core';
import { MyOtherNestProjectModule } from './my-other-nest-project.module';

async function bootstrap() {
  const app = await NestFactory.create(MyOtherNestProjectModule);
  await app.listen(3000);
}
bootstrap();
