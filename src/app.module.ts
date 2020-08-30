import { Module } from '@nestjs/common';
import { CommuneModule } from './modules/commune/commune.module';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';
import { PharmacyDutyModule } from './modules/pharmacy-duty/pharmacy-duty.module';

@Module({
  imports: [CommuneModule, PharmacyModule, PharmacyDutyModule],
})
export class AppModule {}
