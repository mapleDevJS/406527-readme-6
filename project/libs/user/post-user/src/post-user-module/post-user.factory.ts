import { AuthUser, EntityFactory } from '@project/core';
import { PostUserEntity } from './post-user.entity';
import {Injectable} from "@nestjs/common";

@Injectable()
export class PostUserFactory implements EntityFactory<PostUserEntity> {
  public create(entityPlainData: AuthUser): PostUserEntity {
    return new PostUserEntity(entityPlainData);
  }
}
