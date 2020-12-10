<template>
  <div id="detail">
    <itsheader></itsheader>
    <tab v-on:listenToChildEvent="showMsgFromChild"></tab>
    <div class="detail-content" id="detail-content" ref="detail">
      <div class="left">
        <p class="title">{{optData.title}}</p>
        <div class="content">{{optData.decoration}}</div>
        <!-- 返回顶部 -->
        <div class="backtop" @click="backTop" ref="backTop">
           <!-- <img src="../assets/img/up2.png" alt="" ref="backtopimg"> -->
        </div>
        <p class="copyright">京ICP备13025218号-6 2018 ITS 版权所有</p>
      </div>
      <div class="right">
        <img :src="lib.transition(item.baseurl)" v-for="item in optData.file" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import itsheader from '@/common/header'
import tab from '@/common/tab'
export default {
  data() {
    return {
      optData: {}
    }
  },
  components: {
    itsheader,
    tab,
  },
  mounted() {
    this.getOptData()
  },
  methods: {
    getOptData() {
      this.optData = JSON.parse(this.$route.query.pam)
      console.log(this.optData)
    },
    showMsgFromChild: function(data) {
      console.log(data)
    },
    backTop() {
      // console.log(this.$refs.detail)
      // console.log(document.documentElement.scrollTop);
      // document.body.scrollTop = document.documentElement.scrollTop = 0
      // document.documentElement.scrollTop -= 100
      // 返回顶部函数
      var t = setInterval(function() {
        document.documentElement.scrollTop -= 150
        if (document.documentElement.scrollTop == 0) {
          clearInterval(t)
        }
      },30) 
    }
  }
}
</script>
<style lang="less" scoped>
.detail-content {
  width: 1200px;
  min-height: 400px;
  overflow: hidden;
  margin: 220px auto 150px auto;
  position: relative;
  .left {
    width: 350px;
    min-height: 100px;
    position: fixed;
    .title {
      height: 55px;
      line-height: 55px;
      font-size: 14px;
      color: #707070;
      border-bottom: 1px solid #a9a9a9;
      overflow: hidden;
      margin: 0px auto 10px auto;
    }
    .content {
      font-size: 12px;
      color: #707070;
      line-height: 30px;
    }
    .backtop {
      display: block;
      width: 28px;
      height: 28px;
      border: 1px solid #3f3f3f;
      border-radius: 100px;
      margin-top: 100px;
      background-color: #fff;
      background-image: url('../assets/img/up2.png');
      background-size: 100%;
      // img {
      //   display: block;
      //   width: 24px;
      //   height: 24px;
      //   margin: 3px auto 0 auto;
      // }
      &:hover {
        background-color: #3f3f3f;
        background-image: url('../assets/img/up1.png');
      }
    }
    .copyright {
      font-size: 12px;
      color: #3f3f3f;
      margin-top: 40px;
    }
  }
  .right {
    width: 800px;
    min-height: 100px;
    float: right;
    overflow: hidden;
    img {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>

