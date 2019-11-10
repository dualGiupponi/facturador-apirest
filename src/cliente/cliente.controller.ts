import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { ClienteDTO } from './cliente.dto';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private _ClienteService: ClienteService) {}

  @Get('/')
  async getAllClientes() {
    return await this._ClienteService.allClientes();
  }

  @Get('/:id')
  async getCliente(@Param('id') id: string) {
    return await this._ClienteService.getCliente(id);
  }

  @Post('/')
  async createCliente(@Body() newCliente: ClienteDTO) {
    return await this._ClienteService.createCliente(newCliente);
  }

  @Put('/:id')
  async updateCliente(
    @Param('id') id: string,
    @Body() updatedCliente: ClienteDTO,
  ) {
    return await this._ClienteService.updateCliente(id, updatedCliente);
  }

  @Delete('/:id')
  async destroyCliente(@Param('id') id: string) {
    return await this._ClienteService.destroyCliente(id);
  }
}
