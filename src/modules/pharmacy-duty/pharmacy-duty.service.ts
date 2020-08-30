import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PharmacyService } from '../pharmacy/pharmacy.service';
import { PharmacyDutyDto } from './dto/pharmacy-duty..dto';
import { response } from 'express';

@Injectable()
export class PharmacyDutyService {
  constructor(private readonly pharmacyService: PharmacyService) {}

  async findAllPharmacies() {
    const responsePharmacies = await this.pharmacyService.getAllPharmaciesByStateId(
      '7',
    );
    return [...responsePharmacies.data].map(pharmacy => {
      return {
        local_nombre: pharmacy.local_nombre,
        local_direccion: pharmacy.local_direccion,
        local_telefono: pharmacy.local_telefono,
        local_lat: pharmacy.local_lat,
        local_lng: pharmacy.local_lng,
      };
    });
  }
  async findAllPharmaciesByFilters(body: PharmacyDutyDto) {
    let responsePharmaciesFilters = [];
    const responsePharmacies = await this.pharmacyService.getAllPharmaciesByStateId(
      '7',
    );

    if (body.communeName && body.localName) {
      responsePharmaciesFilters = [...responsePharmacies.data].filter(
        element =>
          element.comuna_nombre == body.communeName.toUpperCase() &&
          element.local_nombre == body.localName.toUpperCase(),
      );
    } else if (body.communeName && !body.localName) {
      responsePharmaciesFilters = [...responsePharmacies.data].filter(
        element => element.comuna_nombre == body.communeName.toUpperCase(),
      );
    } else if (!body.communeName && body.localName) {
      responsePharmaciesFilters = [...responsePharmacies.data].filter(
        element => element.local_nombre == body.localName.toUpperCase(),
      );
    } else {
      throw new BadRequestException('Faltan campos para realizar la peticion.');
    }
    return responsePharmaciesFilters.map(pharmacy => {
      return {
        local_nombre: pharmacy.local_nombre,
        local_direccion: pharmacy.local_direccion,
        local_telefono: pharmacy.local_telefono,
        local_lat: pharmacy.local_lat,
        local_lng: pharmacy.local_lng,
      };
    });
  }
}
