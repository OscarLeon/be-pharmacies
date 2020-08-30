import { HttpService, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PharmacyService {
  private readonly urlPharmaciesByStateId: string;
  constructor(private readonly http: HttpService) {
    this.urlPharmaciesByStateId =
      'https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7';
  }

  async getAllPharmaciesByStateId(stateID: string) {
    const allPharmaciesByStateId = await this.http
      .get(this.urlPharmaciesByStateId)
      .toPromise();
    return allPharmaciesByStateId.data;
  }
}
