import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteEntity } from './cliente.entity';
import { FacturaEntity } from '../factura/factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity, FacturaEntity])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
