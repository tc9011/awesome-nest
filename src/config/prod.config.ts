import { resolve } from 'path'

export default {
  port: 3210,

  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3310,
    username: 'root',
    password: '123456',
    database: 'test',
    entities: [resolve('./**/*.entity.js')],
    migrations: ['migration/*.ts'],
    dropSchema: false,
    synchronize: false,
    logging: false,
  },
}
