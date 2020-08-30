import { Controller, Param, Get } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('commune')
@Controller('commune')
export class CommuneController {
  constructor(private readonly communeService: CommuneService) {}

  @Get('/:id')
  getCommunesByStateId(@Param('id') id: string) {
    return this.communeService.getCommunesByStateId(id);
  }
}
