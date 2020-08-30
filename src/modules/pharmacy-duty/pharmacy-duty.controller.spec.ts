import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyDutyController } from './pharmacy-duty.controller';

describe('PharmacyDutyController', () => {
  let controller: PharmacyDutyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyDutyController],
    }).compile();

    controller = module.get<PharmacyDutyController>(PharmacyDutyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
