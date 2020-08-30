import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PharmacyDutyService } from './pharmacy-duty.service';
import { PharmacyDutyDto } from './dto/pharmacy-duty..dto';

@ApiTags('pharmacy-duty')
@Controller('pharmacy-duty')
export class PharmacyDutyController {
  constructor(private readonly pharmacyDutyService: PharmacyDutyService) {}

  @Get()
  findAllPharmacies() {
    return this.pharmacyDutyService.findAllPharmacies();
  }

  @Post()
  findAllPharmaciesByFilters(@Body() body: PharmacyDutyDto) {
    return this.pharmacyDutyService.findAllPharmaciesByFilters(body);
  }
}
