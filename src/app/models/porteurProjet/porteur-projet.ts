import { Users } from '../users';

export class PorteurProjet {
  private user: Users;
  constructor(user: Users) {
    this.user = user;
  }

  //user
  public get getUser(): Users {
    return this.user;
  }

  public set setUser(user: Users) {
    this.user = user;
  }
}
