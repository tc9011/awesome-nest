import { Exclude } from 'class-transformer'
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Exclude()
  @CreateDateColumn({
    comment: '创建时间',
  })
  create_at: number

  @Exclude()
  @UpdateDateColumn({
    comment: '更新时间',
  })
  update_at: number
}
