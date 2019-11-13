import { Controller, Get, Param, Post, UsePipes, Delete, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { ItemDTO } from './item.dto';

@Controller('item')
export class ItemController {
  constructor(private _itemService: ItemService) {}

  @Get('/')
  async getAllItems() {
    return await this._itemService.AllItems();
  }

  @Get('/:id')
  async getItem(@Param('id') id: string) {
    return await this._itemService.Item(id);
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async createItem(@Body() newItem: ItemDTO) {
    return await this._itemService.createItem(newItem);
  }

  @Delete('/:id')
  async destroyItem(@Param('id') id: string) {
    return await this._itemService.destroyItem(id);
  }
}
