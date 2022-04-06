import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyNestProjectService {
  getHello(): string {
    Logger.debug('MyNestProjectService getHello called');
    return 'Hello World!';
  }

  async init(): Promise<void> {
    Logger.debug('MyNestProjectService init called');
    return null;
  }
}
