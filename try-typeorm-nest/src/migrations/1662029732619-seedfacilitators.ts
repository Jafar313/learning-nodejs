import { MigrationInterface, QueryRunner } from 'typeorm';
import { FacilitatorEntity } from '../entities/facilitator.entity';

export class seedfacilitators1662029732619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const facilitator = new FacilitatorEntity();
    facilitator.facilitatorName = 'Jafar';
    await queryRunner.manager.save(FacilitatorEntity, facilitator);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
