import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602614417625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'orphanages',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'varchar'
                    
                },
                {
                    name: 'longitude',
                    type: 'varchar',
                  
                    
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'pendente',
                    type: 'boolean',
                    default: true
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
