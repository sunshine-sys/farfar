<template>
    <div class="solution">
        <img src="./images/pic_03.jpg">
        <h1>解决方案</h1>
        <span class="line"></span>
        <div class="list_box">
            <div class="silution_list">
            <div class="list_content">
                <h2>产品设计</h2>
                <span class="short_line"></span>
                <p>飞安瑞依托先进的仪器设备和强大的研发团队，积极开拓创新，已取得多项专利，并掌握了大量行业领先的核心算法及控制技术。专业提供ODM，OEM及联合开发服务，为各种智能控制器提供设计和制造的完整解决方案。</p>
                <span class="more">查看详情</span>
            </div>
            <img src="./images/sdetail01.jpg">
        </div>
        <div class="silution_list">
            <img src="./images/sdetail01.jpg">
            <div class="list_content">
                <h2>产品设计</h2>
                <span class="short_line"></span>
                <p>飞安瑞依托先进的仪器设备和强大的研发团队，积极开拓创新，已取得多项专利，并掌握了大量行业领先的核心算法及控制技术。专业提供ODM，OEM及联合开发服务，为各种智能控制器提供设计和制造的完整解决方案。</p>
                <span class="more">查看详情</span>
            </div>
        </div>
        <div class="silution_list">
            <div class="list_content">
                <h2>产品设计</h2>
                <span class="short_line"></span>
                <p>飞安瑞依托先进的仪器设备和强大的研发团队，积极开拓创新，已取得多项专利，并掌握了大量行业领先的核心算法及控制技术。专业提供ODM，OEM及联合开发服务，为各种智能控制器提供设计和制造的完整解决方案。</p>
                <span class="more">查看详情</span>
            </div>
            <img src="./images/sdetail01.jpg">
        </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.solution{
    margin-top -50px
}
.solution img{
    height 375px
}
.solution .line{
    display block
    width 80px
    height 3px
    margin 0 auto
    margin-top -15px
    background-color royalblue
}
.solution .list_box{
    display flex
    flex-direction column
    margin 0 auto
    margin-bottom 70px
    margin-top 35px
    width 1200px
}
.solution .silution_list{
    display flex
    justify-content space-between
}
.solution .silution_list img{
    height 441px
}
.solution .silution_list .list_content{
    box-sizing border-box
    width 600px
    padding 20px
    text-align left 
}
.solution .silution_list .list_content .short_line{
    display block
    width 40px
    height 2px
    margin-top -5px
    background-color lightgray
}
.solution .silution_list .list_content .more{
    display block
    width 130px
    line-height 40px
    padding-left 30px
    margin-top 180px
    border 1px solid lightgray
}
</style>