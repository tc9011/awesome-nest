import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('dog')
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  name: string

  @Column()
  age: number

  @Column({ length: 100, nullable: true })
  breed: string
}
