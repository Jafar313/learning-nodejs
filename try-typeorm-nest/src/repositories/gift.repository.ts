import { EntityRepository, Repository } from 'typeorm';
import { GiftEntity } from '../gifts/entities/gift.entity';

@EntityRepository(GiftEntity)
export class GiftRepository extends Repository<GiftEntity> {}
