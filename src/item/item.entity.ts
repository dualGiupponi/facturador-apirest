import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('item_factura')
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ length: 50 })
  codigo_item: string;

  @Column({ length: 300 })
  descripcion: string;

  @Column('decimal')
  precio_unitario: number;

  @Column('decimal')
  iva: number;

  //Relaciones
  //Relacion con Producto
  //Relacion con Factura
}
