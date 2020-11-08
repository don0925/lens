import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
// 全局样式
import "@/styles";
// 自定义svg-icon
import "@/icons";
// 全局过滤器
import * as filters from "./filters";

Vue.config.productionTip = false;

// 注册全局过滤工具
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
