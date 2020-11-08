import createPersistedState from "vuex-persistedstate";

export const plugins = [
  createPersistedState({
    paths: ["theme"],
  }),
];
