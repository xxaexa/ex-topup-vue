import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { login } from "../../api/auth";
import { IUserState } from "../../types";

@Module({ namespaced: true, name: "user" })
export default class User extends VuexModule {
  public user: IUserState | null = null;

  @Mutation
  public SET_USER(user: IUserState | null) {
    this.user = user;
    if (user !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }

  @Mutation
  public CLEAR_USER() {
    this.user = null;
    // Hapus user dari localStorage ketika logout
    localStorage.removeItem("user");
  }

  @Action
  async loginUser(user: any): Promise<void> {
    try {
      const response = await login(user);
      if (response && response.status === 200) {
        this.context.commit("SET_USER", response.data);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error during login", error);
      throw error; // Menyebabkan komponen pemanggil dapat menangkap error ini
    }
  }

  @Action
  logoutUser() {
    this.context.commit("CLEAR_USER");
  }
}
