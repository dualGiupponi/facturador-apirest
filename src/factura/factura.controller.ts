import {
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  Body,
  Delete,
} from '@nestjs/common';

import { FacturaService } from './factura.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { FacturaDTO } from './factura.dto';

@Controller('factura')
export class FacturaController {
  constructor(private _facturaService: FacturaService) {}

  @Get('/')
  async getAllFacturas() {
    return await this._facturaService.AllFacturas();
  }

  @Get('/:id')
  async getFactura(@Param('id') id: string) {
    return await this._facturaService.Factura(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createFactura(@Body() factura: FacturaDTO) {
    return await this._facturaService.createFactura(factura);
  }

  @Delete(':id')
  async destroyFactura(@Param('id') id: string) {
    return await this._facturaService.destroyFactura(id);
  }
}
