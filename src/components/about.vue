<template>
  <div id="about">
      <itsheader></itsheader>
      <div class="table-banner its-has-header">
          <div class="decoration">
              <p class="p1">IDEATALKS STUDIO 2016年成立于北京，</p>
              <p class="p1">集影视广告、商业摄影、视觉及网站设计的品牌营销设计团队。</p>
              <p class="p1">致力于帮助品牌完善企业形象，</p>
              <p class="p1">提升品牌价值，增进产品体验。</p>
          </div>
          <p class="float-p">IDEATALKS STUDIO</p>
      </div>
      <div class="information">
          <p class="p2">E-mail</p>
          <p class="p2">ITS@ideatalks.cn</p>
          <p class="p3"></p>
          <p class="p2">TEL</p>
          <p class="p2">185 0062 7629</p>
          <div class="QRcode">
              <div class="qr-item qr-left">
                  <img src="../assets/img/qr1.jpg" alt="">
                  <p>企业公众号</p>
              </div>
              <div class="qr-item qr-right">
                  <img src="../assets/img/qr2.jpg" alt="">
                  <p>企业客服</p>
              </div>
          </div>
          <!-- <p class="p2">185 1545 8690</p> -->
          <!-- <p class="p3"></p>
          <p class="p2">Add</p>
          <p class="p2">北京市 海淀区 翠微中里14号楼 三层A756</p> -->
      </div>
  </div>
</template>
<script>
import itsheader from '@/common/header'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            itsheader
        },
        watch: {
            '$route' (to, from) {
                console.warn(to);
                console.warn(from);
            }
        },
        mounted: function(){
            
        },
        methods: {}
    }
</script>
<style lang="less" scoped>
#about {
    .table-banner {
        width: 100%;
        height: 400px;
        background: url('../assets/img/aboutbanner.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        margin-top: 80px;
        overflow: hidden;
        color: #fff;
        text-align: center;
        .decoration {
            margin-top: 75px;
            .p1 {
                font-size: 16px;
                line-height: 35px;
            }
        }
        .float-p {
            font-size: 100px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -45px;
            font-weight: 100;
            letter-spacing: 10px;
            cursor: default;
            transition: all 0.6s;
        }
        .float-p:hover {
            bottom: -15px;
        }
    }
    .information {
        display: block;
        overflow: hidden;
        margin: 200px auto 100px auto;
        .p2 {
            font-size: 16px;
            color: #3f3f3f;
            text-align: center;
            line-height: 35px;
        }
        .p3 {
            width: 15px;
            height: 1px;
            background: #3f3f3f;
            margin: 10px auto;
        }
        .QRcode {
            width: 30%;
            margin: 20px auto;
            overflow: hidden;
            justify-content: space-between;
            .qr-item {
                width: 45%;
                img {
                    display: block;
                    width: 100%;
                }
                p {
                    font-size: 14px;
                    text-align: center;
                    color: #252525;
                    padding: 10px 0;
                }
            }
            .qr-left {
                float: left;
            }
            .qr-right {
                float: right;
            }
        }
    }
}
</style>
