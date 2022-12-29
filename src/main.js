import { createApp } from 'vue'
import { createRouter } from '@/router'

/* swiper */
// import 'swiper/swiper.min.css'

/* 重置样式 */
import './assets/css/reset.min.css'

// import 'jquery'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'

/* animate.css */
import 'animate.css'

import App from './App.vue'

const router = createRouter()
createApp(App).use(router).mount('#app')
