import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersAccountsService } from './suppliers_accounts.service';

describe('SuppliersAccountsService', () => {
  let service: SuppliersAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuppliersAccountsService],
    }).compile();

    service = module.get<SuppliersAccountsService>(SuppliersAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
