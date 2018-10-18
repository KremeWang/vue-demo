// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//在vue项目中引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//在vue项目中引入 mui 
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//所有的脚手架项目总的路由在 router /index.js中配置
//每一个 .vue 的文件都是一个组件 --> 每一个 .vue 的template 中只能有一个根元素
//main.js 就是我们项目的Js 的入口文件，你想要的所有组件中使用的一些都要在main.js中引入
//app.vue 是根组件


//使用mint-ui 的步骤
//1.npm i mint-ui -S
//2.import MintUI from 'mint-ui'
//3.import 'mint-ui/lib/style.css'
//4.import App from './App.vue

