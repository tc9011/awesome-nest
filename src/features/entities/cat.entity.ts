import { Transform } from 'class-transformer'
import { Column, Entity } from 'typeorm'

import { CommonEntity } from './common.entity'

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
