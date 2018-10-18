<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "这个是HomePage组件"
    };
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
  }
}
</style>