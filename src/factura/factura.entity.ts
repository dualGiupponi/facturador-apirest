import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

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
}
