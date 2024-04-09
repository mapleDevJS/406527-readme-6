import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {PostUserModule} from "@project/post-user";
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule, getMongooseOptions } from '@project/config';

@Module({
  imports: [
    PostUserModule,
    AuthenticationModule,
    UserConfigModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
