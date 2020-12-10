<template>
  <div id="case">
      <itsheader ref='c1'></itsheader>      
      <tab></tab>
      
      <div class="case-content">
        <div class="nodata" v-if="this.showList.length == 0">
          <img src="../assets/img/nodata.png" alt="">
          <p>找不到内容哦~</p>
        </div>
        <waterfall
        :align="align"
        :line-gap="400"
        :watch="showList"
        @reflowed="reflowed"
        ref="waterfall"
        v-show="this.showList.length != 0"
        >
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot
          v-for="(item, index) in showList"
           :width="item.file[0].width"
          :height="item.file[0].height"
          :order="index"
          :key="item.index"
          move-class="item-move"
        >
          <div class="case-div item" :style="item.style" style="overflow: hidden;" @click="goDetail(item)">
            <img class="case-div-img" v-lazy="lib.transition(item.file[0].baseurl)" alt="">
            <div class="shade">
              <p>{{item.title}}</p>
            </div>
          </div>
        </waterfall-slot>
      </waterfall>

      <!-- 视频区域 -->
      <div class="advertisingDiv" v-if="this.caseId == 'advertising'">
          <div v-for="opt in videoList" class="advertisingDivsmall">
            <p class="sort-p">{{opt.sort}}</p>
            <div>
              <div class="video-div" v-for="item in opt.file">
                <div class="img-box">
                  <img class="video-div-img" v-lazy="lib.transition(item.banner)" alt="">
                </div>
                <p class="video-div-p">{{item.title}}</p>
                <img src="../assets/img/video.png" class="play-icon"  @click="playVideo(item)" alt="">
              </div>
            </div>
          </div>
      </div>  
      </div>
      <div class="black-video" :style="{height: clientHeight + 'px'}" v-if="showBlackVideo" @click="hideBlackVideo($event)">
          <its-video ref="itsvideo" :weburl="videoInfo.weburl">
            <!-- <div slot="abc">我就是这个叫mySlot的slot替代内容，这里可以放任何标签元素，即使是一长串ul>li列表</div> -->
            <div class="close" slot="closeBtn" @click="hideBlackVideo($event)">
              <img src="../assets/img/close.png" alt="" class="closeImg">
            </div>
          </its-video>
      </div>
  </div>
</template>
<script>
import itsheader from '@/common/header'
import tab from '@/common/tab'
import itsVideo from '@/common/itsvideo'
// 瀑布流插件
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
var ItemFactory = (function () {

  var lastIndex = 0

  function generateRandomItems (count) {
    var items = [], i
    for (i = 0; i < count; i++) {
      items[i] = {
        index: lastIndex++,
        style: {
          background: getRandomColor()
        },
        width: 100 + ~~(Math.random() * 50),
        height: 100 + ~~(Math.random() * 50)
      }
    }
    return items
  }

  function getRandomColor () {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }

  return {
    get: generateRandomItems
  }

})()
export default {
  components: {
    itsheader,
    tab,
    itsVideo,
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      clientHeight: '',
      url: 'static/data.json',
      // 分类列表
      classify: [
        {cn: '影视广告', en: 'advertising'},
        {cn: '商业摄影', en: 'shoot'},
        {cn: '品牌视觉', en: 'brand'},
        {cn: '网站搭建', en: 'website'}
      ],
      // 数据内容
      itsdata: {
        all: '',
        advertising: '',
        shoot: '',
        brand: '',
        website: ''
      },
      // 所要显示的list
      showList: {},
      videoList: {},
      align: 'center',
      items: ItemFactory.get(100),
      isBusy: false,
      caseId: this.$route.params.id,
      showBlackVideo: false,
      //视频信息暂存
      videoInfo: {}
    }
  },
  // 过滤器 转换图片地址为在线地址
  filters: {  
      transition: function (value) {  
          // return 'http://ov0v7azi4.bkt.clouddn.com/'+encodeURI(value)
          return 'http://ideatalks.cn/'+encodeURI(value)
      }  
  },  
  mounted:function() {
    this.getData();
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
    // 如果路由有变化，会再次执行该方法
    "$route": "getData",
    clientHeight (val) {
        this.clientHeight = val
    }
  },
  methods: {
    // 获取路由传递的ID值
    getTabId: function() {
      this.caseId = this.$route.params.id;
      this.showList = this.itsdata[this.caseId];
    },
    // 获取图片长宽函数
    getImgSize: function(url) {
      // 图片地址
      var img_url = url+'?'+Date.parse(new Date());
      // 创建对象
      var img = new Image();
      // 改变图片的src
      img.src = img_url;      
    },
    // 获取数据data
    getData () {
      this.caseId = this.$route.params.id;
      this.$http.get(this.url).then(res => {
          this.itsdata = {
            all: [],
            advertising: res.data.advertising,
            shoot: res.data.shoot,
            brand: res.data.brand,
            website: res.data.website
          }
          this.itsdata.all = this.itsdata.all.concat(this.itsdata.shoot).concat(this.itsdata.brand).concat(this.itsdata.website)
          function randomsort(a, b) {
            return Math.random() > 0.5 ? -1 : 1
          }
          this.itsdata.all.sort(randomsort)
          if(this.caseId == 'all') {
            this.showList = this.itsdata.all
          }
          else if(this.caseId == 'advertising') {
            this.showList = {}
            this.videoList = this.itsdata[this.caseId]
          }
          else {
            this.caseId = this.$route.params.id
            this.showList = this.itsdata[this.caseId]
          }
      },error => {
          console.log(error)
      }); 
    },
    addItems: function () {
      if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true
        this.items.push.apply(this.items, ItemFactory.get(50))
      }
    },
    shuffle: function () {
      this.items.sort(function () {
        return Math.random() - 0.5
      })
    },
    reflowed: function () {
      this.isBusy = false
    },
    // 进入详情页
    goDetail: function(opt) {
      var _this = this;
      document.body.scrollTop = document.documentElement.scrollTop = 0
      _this.$router.push({
        name: 'Detail',
        query: {
          pam: JSON.stringify(opt)
        }
      })
    },
    playVideo: function(opt) {
      // alert(JSON.stringify(opt))
      this.videoInfo = opt
      console.log(this.videoInfo)
      this.showBlackVideo = true
    },
    hideBlackVideo: function(event) {
      if (event.target.className === 'black-video' || event.target.className == 'closeImg') {
        this.showBlackVideo = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
#case {

}
.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  color: rgb(0,158,107);
  cursor: pointer;
}
.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.wf-transition {
  transition: opacity .3s ease;
  -webkit-transition: opacity .3s ease;
}
.wf-enter {
  opacity: 0;
}
</style>
