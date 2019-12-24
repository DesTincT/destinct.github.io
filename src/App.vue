<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="JetRuby"
          class="shrink mr-2"
          contain
          src="https://hhcdn.ru/employer-logo/2777580.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-content>
      <Logger />
    </v-content>
  </v-app>
</template>

<script>
import Logger from "./components/Logger.vue";

export default {
  name: "LoggerApp",

  components: {
    Logger
  },

  data: () => ({
    //
  })
};
</script>
