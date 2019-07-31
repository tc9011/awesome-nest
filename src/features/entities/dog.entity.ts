import { Expose, Transform } from 'class-transformer'
import { Column, Entity } from 'typeorm'

import { CommonEntity } from './common.entity'

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
