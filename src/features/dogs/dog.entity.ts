import { Entity, Column } from 'typeorm'

import { CommonEntity } from '../../shared/entities/common.entity'
import { Expose } from 'class-transformer'

@Entity('dog')
export class DogEntity extends CommonEntity {
  @Column({ length: 50 })
  name: string

  @Column()
  age: number

  @Column({ length: 100, nullable: true })
  breed: string

  @Expose()
  get isOld(): boolean {
    return this.age > 10
  }
}
