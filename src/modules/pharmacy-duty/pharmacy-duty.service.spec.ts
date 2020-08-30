import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyDutyService } from './pharmacy-duty.service';

describe('PharmacyDutyService', () => {
  let service: PharmacyDutyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyDutyService],
    }).compile();

    service = module.get<PharmacyDutyService>(PharmacyDutyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
