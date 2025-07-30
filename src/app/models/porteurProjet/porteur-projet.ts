import { Users } from '../users';

export class PorteurProjet {
  private _user: Users;
  constructor(user: Users) {
    this._user = user;
  }

  //user
  public get getUser(): Users {
    return this._user;
  }

  public set setUser(user: Users) {
    this._user = user;
  }
}
