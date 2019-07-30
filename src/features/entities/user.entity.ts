import { BeforeInsert, Column, Entity } from 'typeorm'
import { Exclude } from 'class-transformer'
import * as bcrypt from 'bcryptjs'

import { CommonEntity } from './common.entity'

@Entity('user')
export class UserEntity extends CommonEntity {
  @Column({
    comment: '帐号',
    unique: true,
  })
  account: string

  @Exclude({ toPlainOnly: true })
  @Column({ comment: '密码' })
  password: string

  @Column({ comment: '昵称', default: '' })
  nickname: string

  @BeforeInsert()
  async beforeInsert() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password || '12345678', salt)
  }
}
