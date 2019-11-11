import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { ClienteEntity } from '../cliente/cliente.entity';
import { ItemEntity } from '../item/item.entity';
@Entity('facturas')
export class FacturaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 1 })
  tipo_factura: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'int' })
  punto_venta: number;

  @CreateDateColumn({ type: 'timestamp' })
  fecha: Date;

  //Relaciones
  //Relacion con Cliente
  @ManyToOne(type => ClienteEntity, cliente => cliente.facturas)
  cliente: ClienteEntity;
  //Relación con Item
  @OneToMany(type => ItemEntity, item => item.factura)
  items: ItemEntity[];
}
