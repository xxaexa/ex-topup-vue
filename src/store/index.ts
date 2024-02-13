import { createStore } from "vuex";
import User from "./module/user";

export default createStore({
  modules: {
    user: User,
  },
});
