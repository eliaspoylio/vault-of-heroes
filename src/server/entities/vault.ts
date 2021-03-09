import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne } from 'typeorm';
import { ObjectType, ID, Field, Authorized } from 'type-graphql';

@Entity()
@ObjectType()
export class Vault {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;


  //☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*
	@Field()
	@Column()
	treasures: string;
}
