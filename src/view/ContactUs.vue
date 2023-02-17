<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="请输入名字"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="请输入邮箱"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="请输入电话"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">内容</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    class="btn btn-default btn-block"
                    @click.stop="submitForm"
                  >
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="ContactUs">
import WOW from 'wow.js'
import { onMounted } from 'vue'
// 百度地图BMap构造函数
let BMap = null
onMounted(() => {
  BMap = window.BMap
  var map = new BMap.Map('map') // 创建地图实例
  var point = new BMap.Point(114.54591657517, 30.496032878104) // 创建点坐标
  map.centerAndZoom(point, 18) // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
  var marker = new BMap.Marker(point) // 创建标注
  map.addOverlay(marker) // 将标注添加到地图中
  var opts = {
    width: 50, // 信息窗口宽度
    height: 10, // 信息窗口高度
    title: '武汉XXX公司' // 信息窗口标题
  }
  var infoWindow = new BMap.InfoWindow(
    `<span>地址：武汉市东湖高新技术开发区，马蹄莲<span>
     <br>
     <span>联系方式：423</span>`,
    opts
  ) // 创建信息窗口对象
  map.openInfoWindow(infoWindow, map.getCenter()) // 打开信息窗口
  var wow = new WOW()
  wow.init()
})
function submitForm() {
  window.open(
    'https://neveryu.github.io/web-bookmarks/interview/',
    'web-bookmarks'
  )
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

