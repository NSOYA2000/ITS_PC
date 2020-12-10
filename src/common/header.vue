<template>
  <div id="itsHeader">
      <div class="its-header">
        <div class="its-header1200">
            <div class="its-logo"><router-link to="/"><img src="../assets/img/logo2.png" alt=""></router-link></div>
            <div class="its-menu">
                <ul>
                    <li>
                        <router-link to="/">
                            <span class="cn">首页</span>
                            <span class="en">HOME</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/case/advertising">
                            <span class="cn">案例</span>
                            <span class="en">PRODUCTION</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            <span class="cn">关于</span>
                            <span class="en">ABOUT</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#itsHeader {
  position: relative;
  .its-header {
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      z-index: 1000;
      background: #fff;
      .its-header1200 {
          width: 1200px;
          height: 100px;
          margin: 0 auto;
          overflow: hidden;
          .its-logo {
              display: inline-block;
              width: 140px;
              margin: 33px 0 0 0;
              img {
                  display: block;
                  width: 100%;
              }
          }
          .its-menu {
              display: inline-block;
              overflow: hidden;
              float: right;
              margin: 36px 0 0 0;
              ul {
                  li {
                      list-style: none;
                      display: inline-block;
                      font-size: 12px;
                      color: #252525;
                      margin: 0 20px;
                    //   &::before {
                    //       content: '';
                    //       margin-right: 40px;
                    //   }
                    //   &::after {
                    //       content: '|';
                    //       margin-left: 40px;
                    //   }
                      a {
                          text-decoration: none;
                          color: #252525;
                          font-size: 16px;
                          .cn {
                            display: block;
                            text-align: center;
                            margin-top: 5px;
                            }
                        .en {
                            display: block;
                            text-align: center;
                            font-size: 12px;
                            margin-top: 5px;
                            }
                      }
                  }
                  li:nth-child(3) {
                    //   &::after {
                    //       content: '';
                    //       margin-left: 40px;
                    //   }
                  } 
              }
          }
      }
  }
}
</style>
