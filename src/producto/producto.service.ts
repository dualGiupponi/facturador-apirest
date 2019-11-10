import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductoDTO } from './producto.dto';
import { ProductosEntity } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductosEntity)
    private ProductoRepository: Repository<ProductosEntity>,
  ) {}

  async allProductos() {
    return await this.ProductoRepository.find();
  }

  async getProducto(id: string) {
    const producto = await this.ProductoRepository.findOne({ id });
    if (!producto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return producto;
  }

  async createProducto(newProducto: ProductoDTO) {
    const producto = await this.ProductoRepository.create(newProducto);
    return await this.ProductoRepository.save(producto);
  }

  async updateProducto(id: string, updateProducto: Partial<ProductoDTO>) {
    const producto = await this.ProductoRepository.findOne({ id });
    if (!producto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.ProductoRepository.update({ id }, updateProducto);
    return await this.ProductoRepository.findOne({ id });
  }

  async destroyProducto(id: string) {
    const producto = await this.ProductoRepository.findOne({ id });
    if (!producto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.ProductoRepository.delete({ id });
  }
}
