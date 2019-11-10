import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('productos')
export class ProductosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  codigo: string;

  @Column({ length: 300, nullable: true })
  descripcion: string;

  @Column({ type: 'decimal' })
  precio_unitario: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
