import { compare, genSalt, hash } from 'bcrypt';

import { Entity } from '@project/core';
import { StorableEntity, AuthUser} from '@project/core';

import { SALT_ROUNDS } from './post-user.constant';

export class PostUserEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar: string;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = this.id ?? '';
    this.email = user.email;
    this.avatar = user.avatar;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.passwordHash = user.passwordHash;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<PostUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
