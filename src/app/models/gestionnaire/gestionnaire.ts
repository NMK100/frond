import { Users } from '../users';

export class Gestionnaire {
  private _user: Users;
  private _uriCv: string;

  constructor(user: Users, uriCv: string) {
    this._user = user;
    this._uriCv = uriCv;
  }

  //user
  public get getUser(): Users {
    return this._user;
  }

  public set setUser(user: Users) {
    this._user = user;
  }

  //uricv
  public get getUriCv(): string {
    return this._uriCv;
  }

  public set setUriCv(uriCv: string) {
    this._uriCv = uriCv;
  }
}
