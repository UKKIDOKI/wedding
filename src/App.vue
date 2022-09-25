<template>
  <div class="font_ridi">
    <div class="snow-bg">  </div>
      <IntroMovie/>
      <Map/>


      </div>

</template>

<script>
import IntroMovie from "./components/IntroMovie.vue";
import Map from "./components/Map.vue";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    IntroMovie,
    Map,
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
  },
};
</script>

<style>
.font_ridi {
  background-color:#f7f1e9;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#333;

  font-family: RIDIBatang
}
</style>
