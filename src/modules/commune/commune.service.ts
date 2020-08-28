import { HttpService, Injectable, Logger } from '@nestjs/common';
import * as FormDataFuntcion from 'form-data';
@Injectable()
export class CommuneService {
  private readonly urlCommunesByStateId: string;
  constructor(private readonly http: HttpService) {
    this.urlCommunesByStateId =
      'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones';
    this.http.axiosRef.interceptors.response.use(response => response.data);
  }
  async getCommunesByStateId(stateID: string) {
    try {
      const formData = new FormDataFuntcion();
      formData.append('reg_id', stateID);
      return await this.http
        .post(this.urlCommunesByStateId, formData.getBuffer(), {
          headers: formData.getHeaders(),
        })
        .toPromise();
    } catch (error) {
      Logger.error(error);
    }
  }
}

//       'https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=';