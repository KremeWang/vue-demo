import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

//导入组件
import HomePage from '@/components/tabbar/HomePage.vue'
import members from '@/components/tabbar/members.vue'
import shopCar from '@/components/tabbar/shopCar.vue'
import search from '@/components/tabbar/search.vue'
import news from '@/components/news/news.vue'
import newsInfo from '@/components/news/newsInfo.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    { path: '/home', component: HomePage },
    { path: '/member', component: members },
    { path: '/shopCar', component: shopCar },
    { path: '/search', component: search },
    { path: '/home/news', component: news },
    { path: '/home/newsInfo/:id', component: newsInfo },
    { path: '*', redirect: '/home' }
  ],
  linkActiveClass: 'mui-active'
})
