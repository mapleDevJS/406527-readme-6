import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {PostUserRepository} from "./post-user.repository";
import {PostUserFactory} from "./post-user.factory";
import {PostUserModel, PostUserSchema} from "./post-user.model";

@Module({
  imports: [MongooseModule.forFeature([
    { name: PostUserModel.name, schema: PostUserSchema }
  ])],
  providers: [PostUserRepository, PostUserFactory],
  exports: [PostUserRepository],
})
export class PostUserModule {}
