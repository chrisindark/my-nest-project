import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyOtherLibraryService {
  async init(): Promise<void> {
    Logger.debug('MyOtherLibraryService init called');
    return null;
  }
}
