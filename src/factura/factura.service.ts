import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FacturaEntity } from './factura.entity';
import { FacturaDTO } from './factura.dto';
import { ItemEntity } from '../item/item.entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(FacturaEntity)
    private facturaRepository: Repository<FacturaEntity>,
    @InjectRepository(ItemEntity) private itemRepository:Repository<ItemEntity>
  ) {}

  async AllFacturas() {
    return await this.facturaRepository
      .createQueryBuilder('facturas')
      .innerJoinAndSelect('facturas.cliente', 'cliente')
      .innerJoinAndSelect('facturas.items', 'item_factura')
      .getMany();
  }

  async Factura(id: string) {
    const factura = await this.facturaRepository
      .createQueryBuilder('facturas')
      .innerJoinAndSelect('facturas.cliente', 'cliente')
      .innerJoinAndSelect('facturas.items', 'item_factura')
      .where({id})
      .getOne();
    if (!factura) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return factura;
  }

  async createFactura(newFactura: FacturaDTO) {
    newFactura.items = await this.itemRepository.save(newFactura.items);
    const factura = this.facturaRepository.create(newFactura);
    return await this.facturaRepository.save(factura);
  }

  async destroyFactura(id: string) {
    const factura = await this.facturaRepository.findOne({ id });
    if (!factura) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.facturaRepository.delete({ id });
  }
}
