<template>
  <div class="contact">
    <img src="./images/pic_06.jpg" />
    <h1>联系方式</h1>
    <span class="line"></span>
    <div class="content_box">
      <h3>深圳飞安瑞科技股份有限公司</h3>
      <div class="contact_content">
        <div class="text_box">
          <div class="text">
            <i class="iconfont icon-weibiaoti2fuzhi08"></i>
            <span>
              <em>地址：</em>深圳市光明新区公明街道田寮社区同观路十九号路10号九洲工业园厂房1栋八楼802,502
            </span>
          </div>
          <div class="text">
            <i class="iconfont icon-weibiaoti2fuzhi08"></i>
            <span>
              <em>地址：</em>深圳市光明新区公明街道田寮社区同观路十九号路10号九洲工业园厂房1栋八楼802,502
            </span>
          </div>
          <div class="text">
            <i class="iconfont icon-weibiaoti2fuzhi08"></i>
            <span>
              <em>地址：</em>深圳市光明新区公明街道田寮社区同观路十九号路10号九洲工业园厂房1栋八楼802,502
            </span>
          </div>
        </div>
        <img src="./images/a04.jpg" />
      </div>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>
<script>
import BMap from "BMap";
export default {
  data() {
    return {};
  },
  methods: {
    initMap() {
      // 百度地图API功能
      var map = new BMap.Map("map");
      //   map.centerAndZoom(new BMap.Point(113.923293, 22.733665), 15)
      let point = new BMap.Point(113.923293, 22.733665);
      map.centerAndZoom(point, 15);
      map.setCurrentCity("深圳");
      map.enableScrollWheelZoom(true);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker);
      //添加缩放平移控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl());
      var content = "<table>";
      content =
        content +
        "<tr><td> 地址：深圳市光明新区公明街道田寮社区同观路十九号路10号九洲工业园厂房1栋八楼802,502</td></tr>";
      content = content + "<tr><td> 电话：0755-81791233 </td></tr>";
      content += "</table>";
      var opts = {
        width: 280, // 信息窗口宽度
        height: 80, // 信息窗口高度
        fontsize: "10px",
        title: "深圳飞安瑞科技股份有限公司" // 信息窗口标题
      };
      var infoWindow = new BMap.InfoWindow(content, opts);
      // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter());
      // 打开信息窗口
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.contact {
  margin-top: -50px;
}

.contact img {
  height: 300px;
}

.contact .line {
  display: block;
  margin: 0 auto;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 60px;
  height: 3px;
  background-color: royalblue;
}

.contact .content_box {
  margin: 0 auto;
  width: 1200px;
  text-align: left;
}

.contact .content_box h3 {
  margin: 40px 0;
}

.contact .contact_content {
  display: flex;
  margin-top: 10px;
}

.contact .contact_content .text_box {
  padding-right: 100px;
}

.contact .contact_content .text_box .text {
  display: flex;
  margin-bottom: 20px;
}

.contact .contact_content .text i {
  font-size: 30px;
  margin-right: 20px;
}

.contact .contact_content .text em {
  color: black;
}

.map {
  width: 1200px;
  height: 480px;
  margin: 100px auto;
  background-color: rgba(0, 0, 0, 0.05);
}

/* 地图标题 */
.BMap_bubble_title {
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding-left: 5px;
  margin-top: -5px;
  border-bottom: 1px solid lightgray;
  background: url('images/手机.png') no-repeat 245px center;
  background-size: 18px;
}

/* 消息内容 */
.BMap_bubble_content {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 12px;
}
// 消息
.BMap_pop div:nth-child(9) {
  margin-top: -5px;
}
// 
.BMap_shadow {
  display: none;
}
</style>