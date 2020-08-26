<template>
  <div class="about_top">
    <img src="./images/pic_01.jpg" />
    <div class="about_nav">
      <ul>
        <li class="em1">关于我们</li>
        <li class="on">公司简介</li>
        <li>企业文化</li>
        <li>资质荣誉</li>
        <li>质量管理</li>
        <li>组织框架</li>
        <li>发展历程</li>
        <li>生产设备</li>
      </ul>
    </div>
  </div>
  <div class="simple_content">
    <h1>公司简介</h1>
    <div class="line"></div>
    <div class="simple_intro">
      <img src="./images/cf.jpg"/>
      <div class="intro_content">
        <p><span>深圳飞安瑞科技股份有限公司</span>成立于2010年3月，是专业从事智能控制器研发、生产和销售的国家级高新技术企业。</p>
        <P>2011年6月，公司顺利通过了ISO9001认证审核。公司严格按照ISO9001质量管理体系要求运作，结合金碟K3供应链管理系统，确保公司产品高质量及快速交货。</P>
        <p>公司拥有强大的研发团队及多种研发平台，能够根据客户的需求，在较短的时间内研发出各种性能优越、符合安规要求的智能控制器，配备专业的研发样板制做及测试实验室。</p>
        <P>公司拥有专业的智能控制器生产车间（SMT无尘车间、DIP组装车间），配备了专业的生产、检验、老化设备及可靠性实验室，年产各类智能控制器达1000万套以上。</P>
        <p class="idea">公司经营理念：诚信、责任、创新、共赢。</p>
      </div>
    </div>
  </div>
</template>
<style>
.about_top {
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: -50px;
  border-bottom: 1px solid lightgray;
}
.about_top img {
  height: 337.5px;
}
.about_top .about_nav ul {
  display: inline-block;
  line-height: 60px;
}
.about_top .about_nav ul .on{
    border-bottom: 2px solid cornflowerblue;
}
.about_top .about_nav ul li {
  display: inline-block;
  width: 6vw;
  margin-right: 20px;
  cursor: pointer;
}
.about_top .about_nav ul .em1 {
  font-size: 20px;
  font-weight: 700;
  width: 40vw;
  text-align: left;
  cursor: none;
}
.simple_content {
  width: 1200px;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 70px;
}
.simple_content h1 {
  text-align: center;
}
.simple_content .line {
  width: 50px;
  height: 3px;
  background-color: cornflowerblue;
  margin: 0 auto;
  margin-top: -16px;
  margin-bottom: 50px;
}
.simple_content .simple_intro {
    display: flex;
}
.simple_content .simple_intro img {
    width: 456px;
    height: 342px;
}
.simple_content .simple_intro .intro_content{
    width: 742px;
    height: 342px;
    display: inline-block;
    /* background-color: red; */
}
.simple_content .simple_intro p {
  text-indent: 2em;
  line-height: 26px;
  margin-left: 26px;
}
.simple_content .simple_intro .idea{
    margin-top: 40px;
}
.simple_content .simple_intro span{
    font-weight: 700;
    color:rgba(0, 0, 0, 0.8);
}
</style>