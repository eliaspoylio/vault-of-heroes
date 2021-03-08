import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';

@Entity()
@ObjectType()
export class Role {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	treasurer: boolean;
}
