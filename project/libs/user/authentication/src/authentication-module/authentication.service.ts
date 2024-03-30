import { ConflictException, Injectable } from '@nestjs/common';

import { PostUserRepository, PostUserEntity } from '@project/post-user';

import { CreateUserDto } from '../dto/create-user.dto';
import { AUTH_USER_EXISTS } from './authentication.constant';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly postUserRepository: PostUserRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, avatar} = dto;

    const blogUser = {
      email, firstname, lastname, avatar, passwordHash: ''
    };

    const existUser = await this.postUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new PostUserEntity(blogUser)
      .setPassword(password)

    return this.postUserRepository
      .save(userEntity);
  }
}
