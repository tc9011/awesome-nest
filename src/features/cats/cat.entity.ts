import { Entity, Column } from 'typeorm'

import { CommonEntity } from '../../shared/entities/common.entity'

@Entity('cat')
export class CatEntity extends CommonEntity {
  @Column({ length: 50 })
  name: string

  @Column()
  age: number

  @Column({ length: 100, nullable: true })
  breed: string
}
