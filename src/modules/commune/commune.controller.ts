import { Controller, Param, Get } from '@nestjs/common';
import { CommuneService } from './commune.service';

@Controller('commune')
export class CommuneController {
  constructor(private readonly communeService: CommuneService) {}

  @Get('/:id')
  getCommunesByStateId(@Param('id') id: string) {
    console.log('id: ', id);
    return this.communeService.getCommunesByStateId(id);
  }
}
