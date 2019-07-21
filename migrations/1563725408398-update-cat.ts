import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCat1563725408398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`insert into cat (id, name, age, breed) values (2, 'test', 3, 'cat') `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
