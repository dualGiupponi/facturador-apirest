import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')
export class ClienteEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length:80})
    nombre:string

    @Column({length: 120})
    direccion:string

    @Column({length:15, unique:true})
    cuit:string

    @Column('text')
    imageCliente:string

    @Column('text')
    telefono:string

    @Column({length:80, unique:true})
    email:string
}