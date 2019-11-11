import { Controller, Get, Param, Post, UsePipes, Delete } from '@nestjs/common';
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
  async createItem(newItem: ItemDTO) {
    return await this._itemService.createItem(newItem);
  }

  @Delete('/:id')
  async destroyItem(id: string) {
    return await this._itemService.destroyItem(id);
  }
}
