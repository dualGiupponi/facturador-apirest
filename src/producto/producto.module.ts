import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { ProductosEntity } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosEntity])],
  providers: [ProductoService],
  controllers: [ProductoController],
})
export class ProductoModule {}
