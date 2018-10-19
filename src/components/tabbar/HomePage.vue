<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imagesList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 2. 9宫格图标 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/news">
        <img src="../../images/menu1.png" alt="">
        <div class="mui-media-body">新闻资讯</div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/photolist">
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to='/home/goodslist'>
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div>
      </a></li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagesList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
        // console.log(result);
        if (result.body.status === 0) {
          this.imagesList = result.body.message;
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: cyan;
    }
    &:nth-child(2) {
      background-color: #ff3040;
    }
    &:nth-child(3) {
      background-color: skyblue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>