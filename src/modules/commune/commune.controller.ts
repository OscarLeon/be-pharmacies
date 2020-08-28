import { Controller, Param, Get } from '@nestjs/common';
import { CommuneService } from './commune.service';

@Controller('commune')
export class CommuneController {
  constructor(private readonly communeService: CommuneService) {}

  @Get('/stateID/:id')
  getCommunesByStateId(@Param('id') id: string) {
    return this.communeService.getCommunesByStateId(id);
  }
}
