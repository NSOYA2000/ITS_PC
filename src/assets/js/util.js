// const weburl = 'http://ov0v7azi4.bkt.clouddn.com/'
const weburl = 'http://ideatalks.cn/'

export default {
  // 将图片name转换为外链地址
  transition(value) {
    return weburl+ encodeURI(value)
  },
  // 阻止子元素继承父元素
  stopBubble(event) {
    alert('111')
    console.log(event)
    if (e && e.stopPropagation) {//非IE浏览器 
    　　e.stopPropagation(); 
    } 
    else {//IE浏览器 
    window.event.cancelBubble = true; 
    } 
  }
}