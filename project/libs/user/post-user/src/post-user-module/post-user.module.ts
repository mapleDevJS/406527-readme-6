import { Module } from '@nestjs/common';
import {PostUserRepository} from "./post-user.repository";
import {PostUserFactory} from "./post-user.factory";

@Module({
  providers: [PostUserRepository, PostUserFactory],
  exports: [PostUserRepository],
})
export class PostUserModule {}
