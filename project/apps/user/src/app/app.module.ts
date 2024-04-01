import { Module } from '@nestjs/common';

import {PostUserModule} from "@project/post-user";
import {AuthenticationModule} from "@project/authentication";

@Module({
  imports: [
    PostUserModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
