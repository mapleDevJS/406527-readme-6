import { Module } from '@nestjs/common';

import {PostUserModule} from "@project/post-user";
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule } from '@project/config';

@Module({
  imports: [
    PostUserModule,
    AuthenticationModule,
    UserConfigModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
