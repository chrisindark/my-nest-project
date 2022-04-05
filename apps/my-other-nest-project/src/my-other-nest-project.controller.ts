import { Controller, Get } from '@nestjs/common';
import { MyOtherNestProjectService } from './my-other-nest-project.service';

@Controller()
export class MyOtherNestProjectController {
  constructor(private readonly myOtherNestProjectService: MyOtherNestProjectService) {}

  @Get()
  getHello(): string {
    return this.myOtherNestProjectService.getHello();
  }
}
