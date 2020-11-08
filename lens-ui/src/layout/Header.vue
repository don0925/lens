<template>
  <v-app-bar :dense="dense" app>
    <v-toolbar-title class="hidden-md-and-down">
      <router-link to="/">
        <v-icon color="blue darken-2" class="mr-6"> LENS </v-icon>
      </router-link>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      //
    };
  },
  computed: {
    dense() {
      return this.$vuetify.breakpoint.mdAndDown || this.scrolledDown;
    },
    logoSize() {
      if (this.dense) {
        return "96";
      } else {
        return "128";
      }
    },
  },

  created() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.setScrolledDown);
    }
  },
  destroyed() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.setScrolledDown);
    }
  },
  methods: {
    setScrolledDown() {
      this.scrolledDown = window.pageYOffset > 0;
    },
  },
};
</script>
