import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { PostUserRepository, PostUserEntity } from '@project/post-user';

import { CreateUserDto } from '../dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { LoginUserDto } from '../dto/login-user.dto';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly postUserRepository: PostUserRepository
  ) {}

  public async register(dto: CreateUserDto): Promise<PostUserEntity> {
    const {email, firstname, lastname, password} = dto;

    const postUser = {
      email, firstname, lastname, avatar: '', passwordHash: ''
    };

    const existUser = await this.postUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new PostUserEntity(postUser)
      .setPassword(password)

    await this.postUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.postUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    return this.postUserRepository.findById(id);
  }
}
