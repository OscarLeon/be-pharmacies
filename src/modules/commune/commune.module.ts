import { Module, HttpModule } from '@nestjs/common';
import { CommuneController } from './commune.controller';
import { CommuneService } from './commune.service';

@Module({
  imports: [HttpModule],
  controllers: [CommuneController],
  providers: [CommuneService],
})
export class CommuneModule {}
