import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class ProductoDTO {
  @IsString()
  @IsOptional()
  public readonly id: string;

  @IsString()
  public readonly nombre: string;

  @IsString()
  public readonly codigo: string;

  @IsString()
  @IsOptional()
  public readonly descripcion: string;

  @IsNumberString()
  public readonly precio_unitario: number;
}
