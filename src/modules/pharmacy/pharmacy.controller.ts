import { Controller, Get } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pharmacy')
@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  getAllPharmaciesByStateId() {
    return this.pharmacyService.getAllPharmaciesByStateId('7');
  }
}
