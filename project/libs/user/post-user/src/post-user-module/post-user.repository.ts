import { BaseMemoryRepository } from '@project/data-access';

import { PostUserEntity } from './post-user.entity';
import { PostUserFactory } from './post-user.factory';
import {Injectable} from "@nestjs/common";

@Injectable()
export class PostUserRepository extends BaseMemoryRepository<PostUserEntity> {
  constructor(entityFactory: PostUserFactory) {
    super(entityFactory);
  }
}
