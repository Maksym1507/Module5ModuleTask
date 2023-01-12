import { makeAutoObservable } from "mobx";
import * as authApi from "../api/modules/auth";

class AuthStore {
  id = 0;
  token = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    const result = await authApi.login({ email, password });
    this.token = result.token;
  }

  async register(email: string, password: string) {
    const result = await authApi.register({ email, password });
    this.id = result.id;
    this.token = result.token;
  }
}

export default AuthStore;
