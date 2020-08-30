import { Module } from '@nestjs/common';
import { PharmacyDutyController } from './pharmacy-duty.controller';
import { PharmacyDutyService } from './pharmacy-duty.service';
import { PharmacyModule } from '../pharmacy/pharmacy.module';

@Module({
  imports: [PharmacyModule],
  controllers: [PharmacyDutyController],
  providers: [PharmacyDutyService],
})
export class PharmacyDutyModule {}
