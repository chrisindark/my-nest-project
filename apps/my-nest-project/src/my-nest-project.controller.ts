import { Controller, Get } from '@nestjs/common';
import { MyNestProjectService } from './my-nest-project.service';

@Controller()
export class MyNestProjectController {
  constructor(private readonly myNestProjectService: MyNestProjectService) {}

  @Get()
  getHello(): string {
    return this.myNestProjectService.getHello();
  }
}
