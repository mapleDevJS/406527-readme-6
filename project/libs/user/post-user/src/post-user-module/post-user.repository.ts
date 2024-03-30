import { BaseMemoryRepository } from '@project/data-access';

import { PostUserEntity } from './post-user.entity';
import { PostUserFactory } from './post-user.factory';

export class PostUserRepository extends BaseMemoryRepository<PostUserEntity> {
  constructor(entityFactory: PostUserFactory) {
    super(entityFactory);
  }
}
