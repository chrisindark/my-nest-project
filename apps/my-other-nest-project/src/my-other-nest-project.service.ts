import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyOtherNestProjectService {
  getHello(): string {
    Logger.debug('MyOtherNestProjectService getHello called');
    return 'Hello World!';
  }

  async init(): Promise<void> {
    Logger.debug('MyOtherNestProjectService init called');
    return null;
  }
}
