import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { ClienteEntity } from '../cliente/cliente.entity';
import { ItemEntity } from '../item/item.entity';
import { FacturaEntity } from './factura.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacturaEntity, ClienteEntity, ItemEntity]),
  ],
  providers: [FacturaService],
  controllers: [FacturaController],
})
export class FacturaModule {}
