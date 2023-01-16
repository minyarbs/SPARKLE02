import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersAccountsController } from './suppliers_accounts.controller';

describe('SuppliersAccountsController', () => {
  let controller: SuppliersAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersAccountsController],
    }).compile();

    controller = module.get<SuppliersAccountsController>(SuppliersAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
