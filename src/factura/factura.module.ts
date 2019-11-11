import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FacturaController])],
  providers: [FacturaService],
  controllers: [FacturaController],
})
export class FacturaModule {}
