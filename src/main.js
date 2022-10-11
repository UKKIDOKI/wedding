import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import firebase from 'firebase/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true;

Vue.use(VScrollLock)
Vue.use(VueClipboard)

// use your firebase info
var firebaseConfig = {
  apiKey: 'Use your api key',
  authDomain: 'carepass-test.firebaseapp.com',
  databaseURL: 'https://carepass-test.firebaseio.com',
  projectId: 'carepass-test',
  storageBucket: 'carepass-test.appspot.com',
  messagingSenderId: '{Use your messagingSenderId}',
  appId: '{Use your appId}',
}
firebase.initializeApp(firebaseConfig)

new AOS.init()

new Vue({
  render: (h) => h(App),
}).$mount('#app')
