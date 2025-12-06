import Errors from "@/core/shared/errors"

export interface UserData {
  name: string
  email: string
  id?: string
  password?: string
}

export default class User {
  name: string;
  email: string;
  id?: string;
  password?: string;

  constructor(data: UserData) {
    this.name = data.name;
    this.email = data.email;
    this.id = data.id;
    this.password = data.password;
  }

  validateName() {
    if(this.name == ''){
      throw new Error(Errors.USUARIO_NOME_VAZIO);
    }
  }

  validateEmail(): string {
      throw new Error(Errors.USUARIO_EMAIL_VAZIO);
  }
}