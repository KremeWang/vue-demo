<template>
    <div>
        <div class="goodsinfo-container">
            <!-- 添加购物车小球的显示 -->
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
                <div class="ball" v-show="ballFlag" ref="ball"></div>
            </transition>
            <!-- 商品轮播图区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                    <swiper :lunbotu-list="lunbotu" :isfull="false"></swiper>
                    </div>
                </div>
            </div>
            <!-- 商品购买区域 -->
            <div class="mui-card">
                <div class="mui-card-header">商品名称</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥1999</span>
                    </p>
                    <p>购买数量：<numbox @getcount="getSelectedCount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                    </div>
                </div>
            </div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
                <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
//引入轮播组件
import swiper from "../subcomponents/swiper.vue";
//引入商品数量组件
import numbox from "../subcomponents/numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
      lunbotu: [], // 轮播图的数据
      ballFlag: ""
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
          // [{src: 'http://www.klxin.cn/img/a.jpg'}, {src: 'http://www.klxin.cn/img/a.jpg'}]
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          // [{src: 'http://www.klxin.cn/img/a.jpg', img: 'http://www.klxin.cn/img/a.jpg '}, {src: 'http://www.klxin.cn/img/a.jpg', img: 'http://www.klxin.cn/img/a.jpg '}]
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      // 获取商品的信息
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    goDesc(id) {
      // 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      // 点击跳转到 评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopCar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
    },
    // 动画函数
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth; // 强制让页面重绘
      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";

      done(); // 必须加的
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 390px;
  left: 146px;
}
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
