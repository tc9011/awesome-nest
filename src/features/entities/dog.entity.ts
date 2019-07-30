import { Entity, Column } from 'typeorm'

import { CommonEntity } from './common.entity'
import { Expose, Transform } from 'class-transformer'

@Entity('dog')
export class DogEntity extends CommonEntity {
  @Column({ length: 50 })
  @Transform(value => `dog: ${value}`)
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
