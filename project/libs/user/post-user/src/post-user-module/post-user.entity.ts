import { Entity } from '@project/core';
import { StorableEntity, AuthUser} from '@project/core';

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
}
