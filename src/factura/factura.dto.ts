import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumberString,
  IsDateString,
} from 'class-validator';

export class FacturaDTO {
  @IsString()
  @IsOptional()
  public readonly id: string;
  @IsString()
  public readonly tipo_factura: string;
  @IsNumberString()
  @IsNotEmpty()
  public readonly numero: number;
  @IsNumberString()
  @IsNotEmpty()
  public readonly punto_venta: number;
  @IsDateString()
  public readonly fecha: Date;
}
