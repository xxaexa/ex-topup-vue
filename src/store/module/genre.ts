// src/store/todos/index.ts
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";
import { MovieState } from "./types";

@Module({ namespaced: true, name: "movies" })
export default class Movies extends VuexModule {
  // State
  public movies: MovieState[] = [];

  // Getters
  get allMovies() {
    return this.movies;
  }

  get moviesByGenre() {
    return (genre: string) => {
      return this.movies.filter((movie) => movie.genre === genre);
    };
  }

  // Mutations
  @Mutation
  public SET_MOVIES(movies: MovieState[]) {
    this.movies = movies;
  }

  // Actions
  @Action
  async fetchMovies() {
    try {
      const response = await axios.get("http://localhost:3000/movies");
      this.context.commit("SET_MOVIES", response.data);
    } catch (error) {
      console.error("Fetch todos failed:", error);
    }
  }

  @Action
  async addMovie(movie: any) {
    try {
      await axios.post(`http://localhost:3000/movies/`, movie);

      this.fetchMovies();
    } catch (error) {
      console.error("Error add todo:", error);
    }
  }

  @Action
  async updateMovie(payload: { id: string; text: string }) {
    try {
      await axios.put(`http://localhost:3000/movies/${payload.id}`, {
        text: payload.text,
      });

      this.fetchMovies();
    } catch (error) {
      console.error("Error add todo:", error);
    }
  }

  @Action
  async deleteMovie(id: string) {
    try {
      await axios.delete(`http://localhost:3000/movies/${id}`);
      this.fetchMovies();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
}
