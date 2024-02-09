import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "../index";
import { getGenres } from "../../api/genre";
import type { IGenresState, genre } from "../../types";

@Module({ dynamic: true, store, name: "genre" })
class Genre extends VuexModule implements IGenresState {
  public genres: genre[] = [];
  public isLoading: boolean = false;

  @Mutation
  private SET_GENRES(genres: genre[]) {
    this.genres = genres;
  }

  @Mutation
  private ADD_GENRE(genre: genre) {
    this.genres.push(genre);
  }
  @Mutation
  private SET_LOADING(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Action
  public async addGenre(genre: genre) {
    this.ADD_GENRE(genre);
  }

  @Action
  public async getGenres() {
    this.SET_LOADING(true);
    try {
      const response = await getGenres({});
      if (response && response.data) {
        this.SET_GENRES(response.data);
      }
    } finally {
      this.SET_LOADING(false);
    }
  }
}

export const GenreModule = getModule(Genre, store);
