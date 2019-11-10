import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClienteEntity } from './cliente.entity';
import { ClienteDTO } from './cliente.dto';
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private _ClienteRepository: Repository<ClienteEntity>,
  ) {}

  async allClientes() {
    return await this._ClienteRepository.find();
  }

  async getCliente(id: string) {
    const getClient = await this._ClienteRepository.findOne({ id });
    if (!getClient) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return getClient;
  }

  async createCliente(cliente: ClienteDTO) {
    const newCliente = await this._ClienteRepository.create(cliente);
    return await this._ClienteRepository.save(newCliente);
  }

  async updateCliente(id: string, updateCliente: Partial<ClienteDTO>) {
    const cliente = await this._ClienteRepository.findOne({ id });
    if (!cliente) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this._ClienteRepository.update({ id }, updateCliente);
    return await this._ClienteRepository.findOne({ id });
  }

  async destroyCliente(id: string) {
    const cliente = await this._ClienteRepository.findOne({ id });
    if (!cliente) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return this._ClienteRepository.delete({ id });
  }
}
