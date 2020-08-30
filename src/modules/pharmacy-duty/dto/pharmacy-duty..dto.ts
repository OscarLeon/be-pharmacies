import { ApiProperty } from '@nestjs/swagger';

export class PharmacyDutyDto {
  @ApiProperty({
    required: true,
  })
  communeName: string;
  @ApiProperty({
    required: true,
  })
  localName: string;
}
