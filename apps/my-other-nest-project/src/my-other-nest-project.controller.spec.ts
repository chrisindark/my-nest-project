import { Test, TestingModule } from '@nestjs/testing';
import { MyOtherNestProjectController } from './my-other-nest-project.controller';
import { MyOtherNestProjectService } from './my-other-nest-project.service';

describe('MyOtherNestProjectController', () => {
  let myOtherNestProjectController: MyOtherNestProjectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyOtherNestProjectController],
      providers: [MyOtherNestProjectService],
    }).compile();

    myOtherNestProjectController = app.get<MyOtherNestProjectController>(MyOtherNestProjectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myOtherNestProjectController.getHello()).toBe('Hello World!');
    });
  });
});
