// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
//公共方法
import lib from './assets/js/util'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VideoPlayer from 'vue-video-player'

// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })

Vue.use(VideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.lib = lib
Vue.use(VueLazyload, {
  error: 'static/failed.png',//这个是请求失败后显示的图片
  loading: 'static/loading.png',//这个是加载的loading过渡效果
  try: 2 //加载图片数量
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
