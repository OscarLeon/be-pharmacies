import { Module, HttpModule } from '@nestjs/common';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
  imports: [HttpModule],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
