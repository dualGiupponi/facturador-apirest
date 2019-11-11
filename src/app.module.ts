import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { ProductoModule } from './producto/producto.module';
import { FacturaModule } from './factura/factura.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ClienteModule,
    TypeOrmModule.forRoot(),
    ProductoModule,
    FacturaModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
