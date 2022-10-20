import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true;
Vue.use(Vant);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(VScrollLock)
Vue.use(VueClipboard)

new AOS.init()

new Vue({
  render: (h) => h(App),
}).$mount('#app')
