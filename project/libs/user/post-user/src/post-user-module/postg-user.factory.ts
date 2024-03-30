import { AuthUser, EntityFactory } from '@project/core';
import { PostUserEntity } from './post-user.entity';

export class PostUserFactory implements EntityFactory<PostUserEntity> {
  public create(entityPlainData: AuthUser): PostUserEntity {
    return new PostUserEntity(entityPlainData);
  }
}
