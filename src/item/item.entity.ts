import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { FacturaEntity } from '../factura/factura.entity';
import { ProductosEntity } from '../producto/producto.entity';

@Entity('item_factura')
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ length: 50 })
  codigo_item: string;

  @Column({ length: 300, nullable: true })
  descripcion: string;

  @Column('decimal')
  precio_unitario: number;

  @Column('decimal')
  iva: number;

  //Relaciones
  //Relación con Factura
  @ManyToMany(type => FacturaEntity, factura => factura.items)
  @JoinTable()
  factura: FacturaEntity;

  @ManyToMany(type => ProductosEntity, producto => producto.items)
  @JoinTable()
  productos: ProductosEntity[]
}
