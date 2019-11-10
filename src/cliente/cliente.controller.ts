import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UsePipes,
} from '@nestjs/common';

import { ClienteDTO } from './cliente.dto';
import { ClienteService } from './cliente.service';
import { ValidationPipe } from '../shared/validation.pipe';

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
  @UsePipes(new ValidationPipe())
  async createCliente(@Body() newCliente: ClienteDTO) {
    return await this._ClienteService.createCliente(newCliente);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
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
