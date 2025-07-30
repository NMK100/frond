import { Users } from '../users';

export class Contributeur {
  private user: Users;
  private niveau: string;
  private specialite: string;
  private type: string;
  private pieces: number;
  private uriCv: string;

  constructor(
    user: Users,
    niveau: string,
    specialite: string,
    type: string,
    pieces: number,
    uriCv: string
  ) {
    this.user = user;
    this.niveau = niveau;
    this.specialite = specialite;
    this.type = type;
    this.pieces = pieces;
    this.uriCv = uriCv;
  }

  //User
  public get getUser(): Users {
    return this.user;
  }

  public set setUser(user: Users) {
    this.user = user;
  }

  //niveau
  public get getNiveau(): string {
    return this.niveau;
  }

  public set setNiveau(niveau: string) {
    this.niveau = niveau;
  }

  //Specialite
  public get getSpecialite(): string {
    return this.specialite;
  }

  public set setSpecialite(specialite: string) {
    this.specialite = specialite;
  }

  //Type
  public get getType(): string {
    return this.type;
  }

  public set setType(type: string) {
    this.type = type;
  }

  //pieces
  public get getPieces(): number {
    return this.pieces;
  }

  public set setPieces(pieces: number) {
    this.pieces = pieces;
  }

  //UriCv
  public get getUriCv(): string {
    return this.uriCv;
  }

  public set setUriCv(uriCv: string) {
    this.uriCv = uriCv;
  }
}
