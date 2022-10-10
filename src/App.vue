<template>
  <div>
    <IntroMovie/>
  </div>
</template>

<script>

import IntroMovie from "./components/IntroMovie.vue";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    IntroMovie,
  },
  data() {
    return {
      isOpen: false,
      presents: [],
      selectedPresent: {},
    };
  },
  created() {
    this.loadPresents();
  },
  methods: {
    loadPresents() {
      const presentsRef = firebase.database().ref("presents");
      presentsRef.on("value", (snapshot) => {
        const presents = snapshot.val();
        this.presents = presents.map((present, index) => {
          return {
            ...present,
            id: index,
          };
        });
      });
    },
    handleClick(present) {
      this.isOpen = true;
      this.selectedPresent = present;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
</style>
