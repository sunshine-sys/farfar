<template>
    <div v-swiper:mySwiper="swiperOption" class="container">
      <div class="swiper-wrapper content">
        <div class="swiper-slide " :key="banner" v-for="banner in banners">
          <img :src="banner" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- <img src="./images/3.jpg" />
      <img src="./images/1.jpg" />
      <img src="./images/2.jpg" />
      <img src="./images/3.jpg" />
    <img src="./images/1.jpg" />-->
    <!-- <ul class="list">
      <li class="active"></li>
      <li></li>
      <li></li>
    </ul> -->
  <div class="introduct">
    <a class="intro_left" href="http://www.szfar.com/solution.html">
      Technology
      <br />
      <span class="intro_left_content">强大研发能力</span>
    </a>
    <a class="intro_center" href="http://www.szfar.com/quality.html">
      Quality
      <br />
      <span class="intro_left_content">质量管理</span>
    </a>
    <div class="intro_right">
      <em>
        LATEST NEWS
        <br />
        <i>最新新闻</i>
      </em>
      <div class="intro_right_content">
        <div id="intro_right_content_1">
          <a href="http://www.szfar.com/2019-03-28_51278.html">
            2018年10月，国家级高新技术企业认证复审通过
            <br />
            <span class="repeat">2018年10月，国家级高新技术企业认证复审通过</span>
          </a>
        </div>
        <div id="intro_right_content_2">
          <a href="http://www.szfar.com/2019-03-28_72898.html">
            2017年11月，深圳飞安瑞科技股份有限公司新三板挂牌上市成功
            <br />
            <span class="repeat">2017年11月，深圳飞安瑞科技股份有限公司新三板挂牌上市成功</span>
          </a>
        </div>
        <div id="intro_right_content_3">
          <a href="http://www.szfar.com/2019-06-24_50231.html">
            2011年6月，ISO9001质量管理体系认证通过
            <br />
            <span class="repeat">2011年6月，ISO9001质量管理体系认证通过</span>
          </a>
        </div>
        <ul class="change">
          <li class="bg"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
        // ...
      }
    };
   },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  }
};
</script>

<style>
.container {
  position: relative;
  top: -50px;
  margin: 0 auto;
  width: 1200px;
  height: 466px;
  font-size: 0;
  overflow: hidden;
}
.container .content {
  position: absolute;
  left: -1200px;
  width: 6000px;
  height: 466px;
}
.container .list {
  position: absolute;
  bottom: 14px;
  left: 50%;
  margin-left: -36px;
}
.container .list li {
  display: inline-block;
  margin: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #dcdcdc;
  cursor: pointer;
}
.container .list .active {
  background-color: royalblue;
}
.introduct {
  position: relative;
  top: -50px;
  width: 1200px;
  height: 226px;
  margin: 0 auto;
  margin-top: 5px;
  font-size: 0;
}
.introduct .intro_left,
.introduct .intro_center {
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  width: 312px;
  height: 206px;
  font-size: 20px;
  text-align: center;
  padding-top: 120px;
  text-transform: uppercase;
  color: white;
}
.introduct .intro_left_content {
  font-size: 15px;
}
.introduct .intro_left {
  left: 0;
  background: url(images/index_icon4.png) no-repeat center 30%;
  background-color: lightskyblue;
}
.introduct .intro_center {
  left: 312px;
  background: url(images/index_icon3.png) no-repeat center 30%;
  background-color: slateblue;
}
.introduct .intro_right {
  position: absolute;
  right: 0;
  display: inline-block;
  box-sizing: border-box;
  width: 576px;
  height: 206px;
  padding: 30px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
  background: url(images/index_icon2.png) no-repeat 30px 36px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.introduct .intro_right em {
  padding-left: 40px;
}
.introduct .intro_right i {
  padding-left: 40px;
  font-size: 16px;
}
.introduct .intro_right .intro_right_content {
  position: absolute;
  width: 500px;
  height: 50px;
  padding-top: 20px;
}
#intro_right_content_2,
#intro_right_content_3 {
  display: none;
}
.introduct .intro_right .intro_right_content a {
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}
.introduct .intro_right .intro_right_content a .repeat {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.introduct .intro_right .change {
  width: 150px;
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  /* border: 1px red solid; */
}
.introduct .intro_right .change li {
  display: inline-block;
  width: 36px;
  height: 3px;
  margin-right: 8px;
  background-color: darkgray;
  cursor: pointer;
}
.introduct .intro_right .change .bg {
  background-color: royalblue;
  height: 8px;
}
</style>