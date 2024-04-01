import { BaseMemoryRepository } from '@project/data-access';

import { PostUserEntity } from './post-user.entity';
import { PostUserFactory } from './post-user.factory';
import {Injectable} from "@nestjs/common";

@Injectable()
export class PostUserRepository extends BaseMemoryRepository<PostUserEntity> {
  constructor(entityFactory: PostUserFactory) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<PostUserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);

    return user ? this.entityFactory.create(user) : null;
  }
}
