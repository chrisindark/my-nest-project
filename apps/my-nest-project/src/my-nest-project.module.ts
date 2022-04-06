import { Module } from '@nestjs/common';
import { MyNestProjectController } from './my-nest-project.controller';
import { MyNestProjectService } from './my-nest-project.service';

@Module({
  imports: [],
  controllers: [MyNestProjectController],
  providers: [MyNestProjectService],
})
export class MyNestProjectModule {}
