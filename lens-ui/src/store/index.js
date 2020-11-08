import Vue from "vue";
import Vuex from "vuex";
// 自定义插件状态变量
import { plugins } from "./plugins";
// 主题
import { theme } from "./modules/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: plugins,
  state: {},
  mutations: {},
  actions: {},
  modules: { theme },
});
