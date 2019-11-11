import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosEntity } from '../producto/producto.entity';
import { FacturaEntity } from '../factura/factura.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductosEntity, FacturaEntity])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
