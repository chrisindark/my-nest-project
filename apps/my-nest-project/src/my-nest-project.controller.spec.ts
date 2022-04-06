import { Test, TestingModule } from '@nestjs/testing';
import { MyNestProjectController } from './my-nest-project.controller';
import { MyNestProjectService } from './my-nest-project.service';

describe('MyNestProjectController', () => {
  let myNestProjectController: MyNestProjectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyNestProjectController],
      providers: [MyNestProjectService],
    }).compile();

    myNestProjectController = app.get<MyNestProjectController>(
      MyNestProjectController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myNestProjectController.getHello()).toBe('Hello World!');
    });
  });
});
