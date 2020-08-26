<template>
  <div class="serve">
    <img src="./images/pic_05.jpg" />
    <div class="serve_title">
      <h2>服务与支持</h2>
      <span>售后服务</span>
    </div>
    <div class="serve_content">
        <h1>售后服务</h1>
        <span></span>
      <img src="./images/idea02.jpg" />
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.serve {
  margin-top: -50px;
}

.serve img {
  height: 375px;
}

.serve .serve_title {
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  height: 60px;
  line-height: 60px;
  margin-top: -6px;
  background-color: rgba(0, 0, 0, 0.05);
}

.serve .serve_title h2 {
  margin-top: 0;
}

.serve .serve_title span {
  display: block;
  border-bottom: 2px solid royalblue;
}
.serve .serve_content{
    margin-bottom 120px
}
.serve .serve_content span{
    display block
    margin 0 auto
    margin-top -20px
    width 40px
    height 3px
    background-color royalblue 
}
.serve .serve_content img{
    width 1100px
    height 541px
}
</style>