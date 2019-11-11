import { FacturaEntity } from '../factura/factura.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('clientes')
export class ClienteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 80 })
  nombre: string;

  @Column({ length: 120 })
  direccion: string;

  @Column({ length: 15, unique: true })
  cuit: string;

  //Valores no obligatorios
  @Column({ type: 'text', nullable: true })
  imageCliente: string;

  @Column({ type: 'text', nullable: true })
  telefono: string;

  @Column({ length: 80, unique: true, nullable: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  //Relaciones
  //Relacion con Factura
  @OneToMany(type => FacturaEntity, factura => factura.cliente)
  facturas: FacturaEntity[];
}
