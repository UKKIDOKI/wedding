<template>
  <div class="music_play"><span class="pointer p-2" v-if="this.sound" @click="soundChange"  ><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16"
                                                            fill="currentColor" viewBox="0 0 16 16"
                                                            class="bi bi-volume-up-fill"><path
      d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path> <path
      d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path> <path
      d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path></svg></span>
    <span class="pointer p-2" v-if="!this.sound" @click="soundChange" title=""><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                      height="16" fill="currentColor"
                                                                      viewBox="0 0 16 16"
                                                                      class="bi bi-volume-mute-fill"><path
        d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"></path></svg></span>
  </div>
</template>

<script>
export default {
  name: "musicPlay",
  data(){
    return{
      sound: true
    }
  },
  methods: {
    soundChange(){
      if (this.sound === true){
        this.sound = false;
        }else if (this.sound === false){
        this.sound = true;
      }
      }
    }
  }


</script>

<style scoped>
.music_play {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  max-width: 480px;
}

.pointer {
  cursor: pointer;
}

.p-2 {
  padding: 0.5rem !important;
}
</style>