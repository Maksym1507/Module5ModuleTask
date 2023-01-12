import { makeAutoObservable, runInAction } from "mobx";
import { IUser } from "../../interfaces/users";
import * as userApi from "../../api/modules/users";

class HomeStore {
  singleUser: IUser = {} as IUser;
  users: IUser[] = [];
  totalPages = 0;
  currentPage = 1;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    runInAction(this.prefetchData);
  }

  async changePage(page: number) {
    this.currentPage = page;
    await this.prefetchData();
  }

  prefetchData = async () => {
    try {
      this.isLoading = true;
      const res = await userApi.getUsersByPage(this.currentPage);
      this.users = res.data;
      this.totalPages = res.total_pages;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
    this.isLoading = false;
  };

  async getSingleUser(id: string) {
    try {
      this.isLoading = true;
      const res = await userApi.getUserById(id);
      this.singleUser = res.data;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
    this.isLoading = false;
  }
}

export default HomeStore;
