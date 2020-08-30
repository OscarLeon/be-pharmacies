import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyDutyService } from './pharmacy-duty.service';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import { HttpModule, HttpService, BadRequestException } from '@nestjs/common';
import {
  ALL_PHARMACIES_RM,
  PHARMACIES_RM_FILTER_COMMUNE,
  PHARMACIES_RM_FILTER_LOCAL,
  PHARMACIES_RM_FILTER_COMMUNE_LOCAL,
} from './pharmacy-duty.mock';
import { PharmacyService } from '../pharmacy/pharmacy.service';
import { PharmacyDutyDto } from './dto/pharmacy-duty..dto';

describe('PharmacyDutyService', () => {
  let service: PharmacyDutyService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PharmacyDutyService, PharmacyService],
    }).compile();

    service = module.get<PharmacyDutyService>(PharmacyDutyService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return local of RM(Without Filters)', async done => {
    const data = ALL_PHARMACIES_RM;
    const response: AxiosResponse<any> = {
      data,
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',
    };

    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response));
    const responsePharmaciesRM = await service.findAllPharmacies();
    expect(responsePharmaciesRM).toEqual(data);
    done();
  });

  it('should return local of RM(With Filter of Commune)', async done => {
    const data = ALL_PHARMACIES_RM;
    const response: AxiosResponse<any> = {
      data,
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(response));
    const body = new PharmacyDutyDto();
    body.communeName = 'BUIN';
    const responsePharmaciesRM = await service.findAllPharmaciesByFilters(body);
    expect(responsePharmaciesRM).toEqual(PHARMACIES_RM_FILTER_COMMUNE);
    done();
  });

  it('should return local of RM(With Filter of Local)', async done => {
    const data = ALL_PHARMACIES_RM;
    const response: AxiosResponse<any> = {
      data,
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(response));
    const body = new PharmacyDutyDto();
    body.localName = 'CRUZ VERDE ';
    const responsePharmaciesRM = await service.findAllPharmaciesByFilters(body);
    expect(responsePharmaciesRM).toEqual(PHARMACIES_RM_FILTER_LOCAL);
    done();
  });

  it('should return local of RM(With Filter Commune and Local)', async done => {
    const data = ALL_PHARMACIES_RM;
    const response: AxiosResponse<any> = {
      data,
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(response));
    const body = new PharmacyDutyDto();
    body.communeName = 'Buin';
    body.localName = 'Ahumada';
    const responsePharmaciesRM = await service.findAllPharmaciesByFilters(body);
    expect(responsePharmaciesRM).toEqual(PHARMACIES_RM_FILTER_COMMUNE_LOCAL);
    done();
  });

  it('should throw new BadRequestException', async done => {
    const responseBadRequest = {
      message: 'Faltan campos para realizar la peticion.',
      statusCode: 400,
    };
    const body = new PharmacyDutyDto();
    const responsePharmaciesRM = await service.findAllPharmaciesByFilters(body);
    expect(responsePharmaciesRM).toEqual(responseBadRequest);
    done();
  });
});
