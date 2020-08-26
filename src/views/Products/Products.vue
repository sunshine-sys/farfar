<template>
    <div class="products">
        <img src="./images/pic_04.jpg">
        <h1>产品中心</h1>
        <div class="products_list">
            <ul class="list_box">
                <li>
                    <img src="./images/未标题-1.jpg">
                    <div class="list_content">
                        <h4>个人护理</h4>
                        <P>个人护理产品在日常生活中扮演重要角色，带来从头到脚的呵护与宠爱，倍感洁净、清新和健康。我们提供全方位个人护理产品解决方案，包括足部、口腔卫生和身体系列，满足客户所有需求。</P>
                    </div>
                </li>
                <li>
                    <img src="./images/未标题-1.jpg">
                    <div class="list_content">
                        <h4>个人护理</h4>
                        <P>个人护理产品在日常生活中扮演重要角色，带来从头到脚的呵护与宠爱，倍感洁净、清新和健康。我们提供全方位个人护理产品解决方案，包括足部、口腔卫生和身体系列，满足客户所有需求。</P>
                    </div>
                </li>
                <li>
                    <img src="./images/未标题-1.jpg">
                    <div class="list_content">
                        <h4>个人护理</h4>
                        <P>个人护理产品在日常生活中扮演重要角色，带来从头到脚的呵护与宠爱，倍感洁净、清新和健康。我们提供全方位个人护理产品解决方案，包括足部、口腔卫生和身体系列，满足客户所有需求。</P>
                    </div>
                </li>
                <li>
                    <img src="./images/未标题-1.jpg">
                    <div class="list_content">
                        <h4>个人护理</h4>
                        <P>个人护理产品在日常生活中扮演重要角色，带来从头到脚的呵护与宠爱，倍感洁净、清新和健康。我们提供全方位个人护理产品解决方案，包括足部、口腔卫生和身体系列，满足客户所有需求。</P>
                    </div>
                </li>
                <li>
                    <img src="./images/未标题-1.jpg">
                    <div class="list_content">
                        <h4>个人护理</h4>
                        <P>个人护理产品在日常生活中扮演重要角色，带来从头到脚的呵护与宠爱，倍感洁净、清新和健康。我们提供全方位个人护理产品解决方案，包括足部、口腔卫生和身体系列，满足客户所有需求。</P>
                    </div>
                </li>
            </ul>
            <ul class="smallcircle">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.products{
    margin-top -50px
}
.products img{
    height 375px
}
.products h1{
    margin-top 10px
    padding-bottom 20px
}
.products .products_list{
    position relative
    margin-bottom 70px
    height 600px
    background-color rgba(0,0,0,.05)
}
.products .products_list .list_box{
    position absolute
    left 50%
    margin-left -595px
    z-index 2
    text-align left
    padding-top 20px
    padding-bottom 20px
    width 1200px
}
.products .products_list .list_box li{
    display inline-flex
    text-align left 
    padding-left 10px
    margin-bottom 20px
    margin-right 10px
    width 580px
    height 175px
    background-color white
}
.products .products_list .list_box li img{
    height 175px
}
.products .products_list .list_box li .list_content{
    padding-left 20px
    padding-right 20px
}
.products .products_list .list_box li .list_content p{
    font-size 12px
}
.products .products_list .smallcircle{
    display flex
    justify-content space-around
    flex-direction column
    position absolute
    z-index 99
    left 50%
    top 5px
    margin-left -15px
    height 585px
}
.products .products_list .smallcircle li{
    display block
    width 30px
    height 30px
    border-radius 50%
    background-color orange
}
</style>