import { Module, HttpModule } from '@nestjs/common';
import { CommuneModule } from './modules/commune/commune.module';
// import { PharmacyModule } from './modules/pharmacy/pharmacy.module';

@Module({
  imports: [CommuneModule],
})
export class AppModule {}
