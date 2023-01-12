import { makeAutoObservable } from "mobx";
import AuthStore from "../../stores/AuthStore";

class LoginStore {
  private authStore: AuthStore;

  email = "";
  password = "";
  error = "";
  isLoading = false;

  constructor(authStore: AuthStore) {
    this.authStore = authStore;
    makeAutoObservable(this);
  }

  changeEmail(email: string) {
    this.email = email;
    if (!!this.error) {
      this.error = "";
    }
  }

  changePassword(password: string) {
    this.password = password;
    if (!!this.error) {
      this.error = "";
    }
  }

  async login() {
    try {
      this.isLoading = true;
      await this.authStore.login(this.email, this.password);
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message;
        alert(this.error);
      }
    }
    this.isLoading = false;
    this.email = "";
    this.password = "";
  }
}

export default LoginStore;
