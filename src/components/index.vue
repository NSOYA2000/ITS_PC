<template>
  <div id="indexApp">
      <div class="content" :style="{height: clientHeight + 'px'}">
          <div class="zhe"></div>
          <video src="https://cn-videos.dji.net/video_trans/e8265cafde5e40d7b1a249d8ff073c31/1080.mp4" loop autoplay preload class="indexVideo"></video>      
          <transition name="fade">
             <div class="its-header" :class="hoverClass" @mouseenter="showTabBg()" @mouseleave="hideTabBg()">
                <div class="its-header1200">
                    <div class="its-logo"><router-link to="/"><img src="../assets/img/logo.png" alt=""></router-link></div>
                    <div class="its-menu">
                        <ul>
                            <li>
                                <router-link to="/">
                                    <span class="en">HOME</span>
                                    <span class="cn">首页</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/case/advertising">
                                    <span class="en">PRODUCTION</span>
                                    <span class="cn">案例</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/about">
                                    <span class="en">ABOUT</span>
                                    <span class="cn">关于</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
          </transition>
          <div class="official">
              <div class="its-play" @click="alertVideo()">欣赏视频<img src="../assets/img/play.png" alt=""></div>
              <p class="text-a">VISUAL LED BY VISION</p>
              <!-- <p class="text-b">广告视觉描绘品牌故事，体验视觉具象品牌价值</p> -->
              <p class="text-b">视野 驱动 视觉</p>
          </div>
          <p class="photoby">*以上视觉内容均由IDEATALKS STUDIO拍摄</p>
          <p class="copyright">京ICP备18011936号 2018 IDEATALKS STUDIO 版权所有</p>
      </div>
      <div class="black-video" :style="{height: clientHeight + 'px'}" v-if="showBlackVideo" @click="hideBlackVideo($event)">
          <its-video ref="itsvideo" :weburl="indexVideoUrl">
            <div class="close" slot="closeBtn" @click="hideBlackVideo($event)">
                <img src="../assets/img/close.png" alt="" class="closeImg">
            </div>
          </its-video>
      </div>
  </div>
</template>
<script>
import itsVideo from '@/common/itsvideo'
    export default {
        data(){
            return {
                clientHeight: '',
                isHover: false,
                hoverClass: 'white',
                showBlackVideo: false,
                indexVideoUrl: 'https://cn-videos.dji.net/video_trans/2ef9d2f3bdbb474c842bf57360c86e1a/720.mp4'
            }
        },
        components: {
            itsVideo
        },
        methods:{
            showTabBg: function() {
                this.hoverClass = 'black';
            },
            hideTabBg: function() {
                this.hoverClass = 'white';
            },
            alertVideo: function() {
                this.showBlackVideo = true
            },
            hideBlackVideo: function(event) {
                // console.log(event.target.className)
                if (event.target.className === 'black-video' || event.target.className == 'closeImg') {
                    this.showBlackVideo = false
                }
            }
        },
        mounted() {
            // 动态设置背景图的高度为浏览器可视区域高度
            
            // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
            this.clientHeight = `${document.documentElement.clientHeight}`;
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            window.onresize = function temp() {
                that.clientHeight = `${document.documentElement.clientHeight}`;
            };
        },
        watch: {
            clientHeight (val) {
                this.clientHeight = val
            }
        }
    }
</script>
<style lang="less" scoped>
.black {
    background: rgba(0,0,0,0.6);
    transition: all 0.8s;
}
.white {
    background: rgba(0,0,0,0);
    transition: all 0.5s;
}
#indexApp {
    .content {
        width: 100%;
        overflow: hidden;
        position: relative;
        .zhe {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.3);
            left: 0;
            top: 0;
        }
        // background: pink;
        .indexVideo {
            display: block;
            width: 100%;
        }
        .its-header {
            width: 100%;
            height: 100px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            overflow: hidden;
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
                            color: #fff;
                            margin: 0 20px;
                            // &::before {
                            //     content: '';
                            //     margin-right: 40px;
                            // }
                            // &::after {
                            //     content: '|';
                            //     margin-left: 40px;
                            // }
                            a {
                                text-decoration: none;
                                color: #fff;
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
                            // &::after {
                            //     content: '';
                            //     margin-left: 40px;
                            // }
                        } 
                    }
                }
            }
        }
        .official {
            display: block;
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 25%;
            .its-play {
                margin: 0 auto;
                font-size: 30px;
                color: #fff;
                text-align: center;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                img {
                    position: absolute;
                    display: inline-block;
                    margin: 0px 0 0 15px;
                }
            }
            .text-a {
                font-size: 80px;
                text-align: center;
                color: #fff;
                margin-top: 50px;
                letter-spacing: 4px;
            }
            .text-b {
                font-size: 36px;
                text-align: center;
                color: #fff;
                margin-top: 10px;
            }
        }
        .photoby {
            font-size: 10px;
            color: #DCDCDC;
            position: absolute;
            right: 5px;
            bottom: 5px;
        }
        .copyright {
            font-size: 10px;
            color: #DCDCDC;
            position: absolute;
            left: 0;
            right: 0px;
            margin: 0 auto;
            text-align: center;
            bottom: 5px;
        }
    }
}
</style>
