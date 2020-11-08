<template>
  <v-footer app>
    <v-row>
      <v-col cols="4">
        <v-switch
          id="theme_select"
          v-model="dark"
          color="primary"
          class="mt-0 mb-2 pt-0"
          hide-details
          label="Dark theme"
        />
      </v-col>

      <v-col class="text-center" cols="4">
        <div class="text-subtitle-1">Lens v{{ version }}</div>
        &copy;{{ new Date().getFullYear() }} - DonDu0925<br />
      </v-col>

      <v-col cols="4">
        <div class="text-right">
          <a
            href="https://github.com/don0925/lens"
            rel="nofollow"
            target="_blank"
            >Github</a
          ><br />
          <a href="https://mail.google.com/" rel="nofollow" target="_blank"
            >dondu0925@gmail.com</a
          >
        </div>
      </v-col>
    </v-row></v-footer
  >
</template>

<script>
const VERSION = require("../../package.json").version;
export default {
  name: "app-footer",
  computed: {
    version() {
      return VERSION;
    },
    dark: {
      get() {
        return this.$store.state.theme.dark;
      },
      set(val) {
        this.$vuetify.theme.dark = val;
        this.$store.commit("theme/setDark", val);
      },
    },
  },
};
</script>
