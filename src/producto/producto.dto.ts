import { IsString, IsNumber, IsOptional } from 'class-validator';

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

  @IsNumber()
  public readonly precio_unitario: number;
}
