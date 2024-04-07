import {Injectable} from "@nestjs/common";
import {Model} from "mongoose";

import { BaseMongoRepository } from '@project/data-access';

import { PostUserEntity } from './post-user.entity';
import { PostUserFactory } from './post-user.factory';
import { PostUserModel } from './post-user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostUserRepository extends BaseMongoRepository<PostUserEntity, PostUserModel> {
  constructor(
    entityFactory: PostUserFactory,
    @InjectModel(PostUserModel.name) blogUserModel: Model<PostUserModel>
  ) {
    super(entityFactory, blogUserModel);
  }

  public async findByEmail(email: string): Promise<PostUserEntity | null> {
    const document = await this.model.findOne({email}).exec();
    return this.createEntityFromDocument(document);
  }
}
