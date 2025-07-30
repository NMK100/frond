import { Users } from '../users';

export class Contributeur {
  private _user: Users;
  private _niveau: string;
  private _specialite: string;
  private _type: string;
  private _pieces: number;
  private _uriCv: string;

  constructor(
    user: Users,
    niveau: string,
    specialite: string,
    type: string,
    pieces: number,
    uriCv: string
  ) {
    this._user = user;
    this._niveau = niveau;
    this._specialite = specialite;
    this._type = type;
    this._pieces = pieces;
    this._uriCv = uriCv;
  }

  //User
  public get getUser(): Users {
    return this._user;
  }

  public set setUser(user: Users) {
    this._user = user;
  }

  //niveau
  public get getNiveau(): string {
    return this._niveau;
  }

  public set setNiveau(niveau: string) {
    this._niveau = niveau;
  }

  //Specialite
  public get getSpecialite(): string {
    return this._specialite;
  }

  public set setSpecialite(specialite: string) {
    this._specialite = specialite;
  }

  //Type
  public get getType(): string {
    return this._type;
  }

  public set setType(type: string) {
    this._type = type;
  }

  //pieces
  public get getPieces(): number {
    return this._pieces;
  }

  public set setPieces(pieces: number) {
    this._pieces = pieces;
  }

  //UriCv
  public get getUriCv(): string {
    return this._uriCv;
  }

  public set setUriCv(uriCv: string) {
    this._uriCv = uriCv;
  }
}
