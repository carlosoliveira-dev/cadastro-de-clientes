import Errors from "@/core/shared/errors"

export interface UserData {
  name: string
  email: string
  id?: string
  password?: string
}

export default class User {
  private name: string;
  private email: string;
  private id?: string;
  private password?: string;

  constructor(data: UserData) {
    this.name = data.name;
    this.email = data.email;
    this.id = data.id;
    this.password = data.password;
  }

  validateName(): string {
    return Errors.USUARIO_NOME_VAZIO
  }
}