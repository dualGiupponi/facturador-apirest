import { ItemEntity } from '../item/item.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity('productos')
export class ProductosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50, unique: true })
  codigo: string;

  @Column({ length: 300, nullable: true })
  descripcion: string;

  @Column({ type: 'decimal' })
  precio_unitario: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  //Relaciones
  @ManyToMany(type => ItemEntity, item => item.productos)
  @JoinTable()
  items: ItemEntity[];
}
