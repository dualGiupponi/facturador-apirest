import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

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
  @ManyToOne(type => FacturaEntity, factura => factura.items)
  factura: FacturaEntity;

  @OneToMany(type => ProductosEntity, producto => producto.item)
  productos: ProductosEntity[]
}
