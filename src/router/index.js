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
import photoList from '@/components/photos/photoList.vue'
import photoInfo from '@/components/photos/photoInfo.vue'
import GoodsList from '@/components/goods/goodsList.vue'
import goodsinfo from '@/components/goods/goodsInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'

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
    { path: '/home/photoList', component: photoList },
    { path: '/home/photoinfo/:id', component: photoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: goodsinfo },
    { path: '/goods/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/goods/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
    { path: '*', redirect: '/home' }
  ],
  linkActiveClass: 'mui-active'
})
