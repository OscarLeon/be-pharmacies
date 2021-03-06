import { HttpService, Injectable } from '@nestjs/common';
import * as FormDataFunction from 'form-data';

@Injectable()
export class CommuneService {
  private readonly urlCommunesByStateId: string;
  constructor(private readonly http: HttpService) {
    this.urlCommunesByStateId = encodeURI(
      'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones/',
    );
  }
  async getCommunesByStateId(stateID: string) {
    const formData = new FormDataFunction();
    formData.append('reg_id', stateID);
    const responseCommunes = await this.http
      .post(this.urlCommunesByStateId, formData.getBuffer(), {
        headers: formData.getHeaders(),
      })
      .toPromise();
    return responseCommunes.data;
  }
}
