import * as bcrypt from 'bcryptjs'
import { Exclude } from 'class-transformer'
import { IsEmail } from 'class-validator'
import { BeforeInsert, Column, Entity } from 'typeorm'

import { CommonEntity } from './common.entity'

@Entity('user')
export class UserEntity extends CommonEntity {
  @Column({
    comment: '邮箱',
    unique: true,
  })
  @IsEmail()
  email: string

  @Exclude({ toPlainOnly: true })
  @Column({ comment: '密码' })
  password: string

  @BeforeInsert()
  async beforeInsert() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password || '12345678', salt)
  }
}
