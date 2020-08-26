<template>
  <div class="news">
      <img src="./images/pic_01.jpg" />
    <div class="news_intro">
      <img src="./images/sdetail03.jpg" />
      <div class="news_intro_content">
        <a>2018年10月，国家级高新技术企业认证复审通过</a><br>
        <span>2018年10月，国家级高新技术企业认证复审通过</span><br>
        <div class="date">
          2019<br>
          <em>03-28</em>
        </div>
      </div>
    </div>
    <ul class="news_list">
        <li>
            <div class="li_box">
                <div class="news_text">
                <em>2018年10月，国家级高新技术企业认证复审通过</em><br>
                <span>2018年10月，国家级高新技术企业认证复审通过</span>
            </div>
          <div class="list_date">
            <em>03-28</em>
            <br>
            <span>2019</span>
          </div>
            </div>
        </li>
        <li>
            <div class="li_box">
                <div class="news_text">
                <em>2018年10月，国家级高新技术企业认证复审通过</em><br>
                <span>2018年10月，国家级高新技术企业认证复审通过</span>
            </div>
          <div class="list_date">
            <em>03-28</em>
            <br>
            <span>2019</span>
          </div>
            </div>
        </li>
         <li>
            <div class="li_box">
                <div class="news_text">
                <em>2018年10月，国家级高新技术企业认证复审通过</em><br>
                <span>2018年10月，国家级高新技术企业认证复审通过</span>
            </div>
          <div class="list_date">
            <em>03-28</em>
            <br>
            <span>2019</span>
          </div>
            </div>
        </li>
         <li>
            <div class="li_box">
                <div class="news_text">
                <em>2018年10月，国家级高新技术企业认证复审通过</em><br>
                <span>2018年10月，国家级高新技术企业认证复审通过</span>
            </div>
          <div class="list_date">
            <em>03-28</em>
            <br>
            <span>2019</span>
          </div>
            </div>
        </li>
      </ul>
    
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.news{
    margin-top -50px
}
.news img{
    height 375px
}
.news .news_intro{
    display flex
    width 1200px
    text-align left
    margin 0 auto
    margin-top 20px
}
.news .news_intro img{
    height 355px
}
.news .news_intro .news_intro_content{
    box-sizing border-box
    width 660px
    height 355px
    padding-left 30px
}
.news .news_intro .news_intro_content a{
    font-size 20px
    color royalblue
    line-height 80px
}
.news .news_intro .news_intro_content .date{
    margin-top 160px
    background url('./images/右箭头.png') no-repeat 150px 14px /30px
}
.news .news_intro .news_intro_content .date em{
    font-size: 35px;
    font-family: fantasy;
    color royalblue
}
.news .news_list{
    width 1200px
    margin 0 auto
    margin-top 20px
    margin-bottom 70px
} 
.news_list .li_box:hover{
    background-color royalblue
    cursor pointer
}  
.news .news_list li{
    display inline-block
    border-top 1px solid lightgray
}
.news .news_list .news_text{
    display inline-block
    box-sizing border-box
    width 950px
    height 150px
    padding-top 30px
    text-align left
    font-size 20px
}
.news .news_list .news_text span{
    font-size 14px
    line-height 60px
}
.news .news_list .list_date{
    display inline-block
    box-sizing border-box
    text-align left 
    padding-left 30px
    width 250px
    height 101px
    border-left 1px solid lightgray
    background url('./images/右箭头.png') no-repeat 180px 30px /30px
}
.news .news_list .list_date em{
    font-size: 35px;
    font-family: fantasy;
}
</style>