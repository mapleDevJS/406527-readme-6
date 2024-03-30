import { Injectable } from '@nestjs/common';

import { PostUserRepository } from '@project/post-user';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: PostUserRepository
  ) {}
}
