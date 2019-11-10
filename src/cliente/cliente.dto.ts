export class ClienteDTO {
  public readonly id: string;
  public readonly nombre: string;
  public readonly direccion: string;
  public readonly cuit: string;
  public readonly imageCliente?: string;
  public readonly telefono?: string;
  public readonly email?: string;
}
