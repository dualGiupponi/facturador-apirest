import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from './item.entity';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private ItemRepository: Repository<ItemEntity>,
  ) {}

  async AllItems() {
    return await this.ItemRepository.find({relations:['productos']});
  }

  async Item(id: string) {
    const item = await this.ItemRepository.findOne({ where:{id}, relations:['productos'] });
    if (!item) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async createItem(newItem: ItemDTO) {
    const item = this.ItemRepository.create(newItem);
    return await this.ItemRepository.save(item);
  }

  async destroyItem(id: string) {
    const item = await this.ItemRepository.findOne({ id });
    if (!item) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.ItemRepository.delete({ id });
  }
}
