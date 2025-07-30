import { Users } from "../users";

export class Contributeur {
  public user: Users;
  public niveau: string;
  public specialite: string;
  public type: string;
  public  pieces:number;
  public uriCv: string;

  constructor(user: Users, niveau: string, specialite: string, type: string, pieces:number, uriCv: string) {
    this.user = user;
    this.niveau = niveau;
    this.specialite = specialite;
    this.type = type;
    this.pieces = pieces;
    this.uriCv = uriCv;
  }

}
