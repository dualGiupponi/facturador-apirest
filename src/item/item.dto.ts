import {
  IsString,
  IsOptional,
  IsNumberString,
  IsNotEmpty,
} from 'class-validator';

export class ItemDTO {
  @IsString()
  @IsOptional()
  public readonly id: string;

  @IsNumberString()
  @IsNotEmpty()
  public readonly cantidad: number;

  @IsString()
  public readonly codigo_item: string;

  @IsString()
  @IsOptional()
  public readonly descripcion: string;

  @IsNumberString()
  @IsNotEmpty()
  public readonly precio_unitario: number;

  @IsNumberString()
  @IsNotEmpty()
  public readonly iva: number;
}
