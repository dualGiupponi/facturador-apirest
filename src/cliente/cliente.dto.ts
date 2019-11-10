import { IsString, IsEmail, IsOptional } from 'class-validator';
export class ClienteDTO {
  @IsString()
  @IsOptional()
  public readonly id: string;
  @IsString()
  public readonly nombre: string;
  @IsString()
  public readonly direccion: string;
  @IsString()
  public readonly cuit: string;
  @IsString()
  @IsOptional()
  public readonly imageCliente?: string;
  @IsString()
  @IsOptional()
  public readonly telefono?: string;
  @IsEmail()
  @IsOptional()
  public readonly email?: string;
}
