import {
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ProductoService } from './producto.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { ProductoDTO } from './producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private _productoService: ProductoService) {}

  @Get('/')
  async getAllProductos() {
    return await this._productoService.allProductos();
  }

  @Get('/:id')
  async getProducto(@Param('id') id: string) {
    return await this._productoService.getProducto(id);
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async createProducto(@Body() newProducto: ProductoDTO) {
    return await this._productoService.createProducto(newProducto);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async updateProducto(
    @Param('id') id: string,
    @Body() updateProducto: ProductoDTO,
  ) {
    return await this._productoService.updateProducto(id, updateProducto);
  }

  @Delete('/:id')
  async destroyProducto(@Param('id') id: string) {
    return await this._productoService.destroyProducto(id);
  }
}
