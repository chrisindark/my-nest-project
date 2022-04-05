import { Injectable } from '@nestjs/common';

@Injectable()
export class MyOtherNestProjectService {
  getHello(): string {
    return 'Hello World!';
  }
}
