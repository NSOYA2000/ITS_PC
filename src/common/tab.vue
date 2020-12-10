<template>
  <div id="tab">
    <div class="case-tab its-has-header">
        <span class="all" :class="{'detail-span-hover': ionindex == -1 }" @click="changeTab('all',-1)">ALL</span>
        <div class="detail">
          <span class="detail-span" :class="{'detail-span-hover': ionindex == index}" v-for="(item, index) in classify" @click="changeTab(item.en, index)">{{item.cn}}</span>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        ionindex: null
      }
    },
    methods: {
      changeTab (opt,$index) {
        // console.log(this.$route.path)
        // console.log(opt+':'+$index)
        // this.ionindex = '/case/'+opt
        // console.log(this.ionindex)
        // console.log(this.$route.path)
        this.ionindex = $index
        var _this = this
        _this.$router.push({path:'/case/'+opt})
        // this.showList = this.itsdata[opt];
        // console.log(this.showList);
        // this.$emit('listenToChildEvent',this.showList)
        // console.warn(this.showList);
      }
    }
  }
</script>
<style lang="less" scoped>
.detail-span-hover {
  color: orange;
}
.case-tab {
    width: 1200px;
    margin: 50px auto 0 auto;
    font-size: 14px;
    color: #3f3f3f;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    padding: 25px 0;
    z-index: 1000;
    .all {
      cursor: pointer;
      display: inline-block;
      float: left;
      &:hover {
        color: orange;
      }
    }
    .detail {
      display: inline-block;
      float: right;
      .detail-span {
        padding: 0 30px 0 10px;
        cursor: pointer;
        // &:hover {
        //   color: orange;
        // }
      }
    }
}
</style>

