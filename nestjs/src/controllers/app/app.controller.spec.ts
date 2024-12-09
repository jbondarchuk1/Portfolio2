import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import InitializeSQLite from '../../../src/database/init';

/**
 * The following is the test suite for the root/app controller
 */
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // this is the test for the root GET request of the API controller. returns a simple string
  describe('root', () => {
    it('should return "hello world"', () => {
      expect(appController.getHello()).toBe('hello world');
    });
  });

  // this is the test for the projects route GET request. Returns a json list with currently 5 items
  describe('projects', () => {
    InitializeSQLite();
    it('should return 5 items', () => {
      return appController.getProjects().then(data =>{
        expect(JSON.parse(data).length).toBe(5);
      })
    });
  });

  // this is the test for the root POST request. It is asynchronous and only returns "ERROR!" if something serious went wrong.
  describe('email', () => {
    it('should be successful', () => {
      return expect(appController.postContact({
        name:'hi',
        email:'hi',
        subject:'hi',
        body:'hi'
      })).toBe('SUCCESS!');
    })
  });

});
