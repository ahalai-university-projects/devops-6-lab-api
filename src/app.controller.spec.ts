import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('getHello', () => {
    it('should return the value from appService.getHello()', () => {
      const result = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockReturnValue(result);
      expect(appController.getHello()).toBe(result);
    });
  });

  describe('getHealth', () => {
    it('should return "OK"', () => {
      expect(appController.getHealth()).toBe('OK!!!');
    });
  });
});
