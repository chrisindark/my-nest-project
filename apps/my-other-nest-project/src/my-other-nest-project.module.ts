import { Module } from '@nestjs/common';
import { MyOtherNestProjectController } from './my-other-nest-project.controller';
import { MyOtherNestProjectService } from './my-other-nest-project.service';

@Module({
  imports: [],
  controllers: [MyOtherNestProjectController],
  providers: [MyOtherNestProjectService],
})
export class MyOtherNestProjectModule {}
