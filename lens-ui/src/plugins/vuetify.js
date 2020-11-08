import Vue from "vue";
import Vuetify from "vuetify/lib";
import store from "@/store";

Vue.use(Vuetify);

export default new Vuetify({
  icons: { iconfont: "mdiSvg" },
  theme: { dark: store.state.theme.dark },
});
