import { Entity, Column } from 'typeorm'

import { CommonEntity } from './common.entity'
import { Transform } from 'class-transformer'

@Entity('cat')
export class CatEntity extends CommonEntity {
  @Column({ length: 50 })
  @Transform(value => `cat: ${value}`)
  name: string

  @Column()
  age: number

  @Column({ length: 100, nullable: true })
  breed: string
}
