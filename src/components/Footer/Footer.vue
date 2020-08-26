<template>
    <div class="footer">
			<div class="footer_box">
				<ul class="footer_nav">
					<li>关于我们
					    <ul class="footer_nav_content1">
					    	<li><a href="http://www.szfar.com/company-profile.html">公司简介</a></li>
					    	<li><a href="http://www.szfar.com/culture.html">企业文化</a></li>
					    	<li><a href="http://www.szfar.com/honor.html">资质荣誉</a></li>
					    	<li><a href="http://www.szfar.com/quality.html">质量管理</a></li>
					    	<li><a href="http://www.szfar.com/organizational-structure_71608.html">组织框架</a></li>
					    	<li><a href="http://www.szfar.com/history_93592.html">发展历程</a></li>
					    	<li><a href="http://www.szfar.com/equipment.html">生产设备</a></li>
					    </ul>
					</li>
					<li>新闻中心</li>
					<li>解决方案</li>
					<li>产品中心
					    <ul class="footer_nav_content1">
					    	<li><a href="http://www.szfar.com/personal-care.html">个人护理</a></li>
					    	<li><a href="http://www.szfar.com/air-handling.html">空气处理</a></li>
					    	<li><a href="http://www.szfar.com/kitchen-appliances.html">厨房电器</a></li>
					    	<li><a href="http://www.szfar.com/other-household-appliances.html">其它家电</a></li>
					    	<li><a href="http://www.szfar.com/bldc%E7%94%B5%E6%9C%BA.html">BLDC电机</a></li>
					    </ul>
					</li>
					<li>服务与支持
					    <ul class="footer_nav_content1">
					    	<li><a href="http://www.szfar.com/after-sale-service.html">售后服务</a></li>
					    </ul>
					</li>
					<li>联系我们</li>
				</ul>
				<div class="code">
					<span>深圳飞安瑞科技股份有限公司 版权所有</span><br>
					<a href="http://www.beian.miit.gov.cn/">粤ICP备17059277号</a>
				</div>
			</div>
		</div>
</template>
<style>
.footer{
    /* position: relative; */
    bottom: 0;
	/* top:-50px; */
	margin-top: 6px;
    width: 100vw;
	height: 270px;
	margin-top:-50px;
	background-color: rgba(0,0,0,.05);
}
.footer .footer_box{
	position: relative;
	width: 1200px;
	height: 50px;
	margin: 0 auto;
	padding-top: 20px;
	font-size: 18px;
	color: rgba(0,0,0,.8);
	/* background-color:  rgba(0,0,0,.05); */
}
.footer .footer_box .footer_nav{
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 900px;
	/* background-color: red; */
}
.footer .footer_box .footer_nav li{
	position: relative;
	left: -20px;
	display: inline-block;
	box-sizing: border-box;
	width: 100px;
	margin-right: 2px;
	/* background-color: green; */
}
.footer .footer_box .footer_nav .footer_nav_content1{
	position: absolute;
	left: 10px;
	display: block;
	font-size: 13px;
}
.footer .footer_box .footer_nav .footer_nav_content1 li{
	display: inline-block;
	margin-top: 10px;
}
.footer .footer_box .footer_nav .footer_nav_content1 a{
	color: rgba(0,0,0,.5);
}
.footer .footer_box .footer_nav .footer_nav_content1 a:hover{
	color: #87CEFA;
}
.footer .footer_box .code{
	position: absolute;
	right: 0;
	top: 30px;
	width: 210px;
	/* height: 200px;  如果保留底部会留白*/
	padding-top: 130px;
	font-size: 12px;
	line-height: 22px;
	color: rgba(0,0,0,.5);
	background: url(./images/ewm.jpg) no-repeat right top;
}
.footer .footer_box .code span,.footer .footer_box .code a{
	position: absolute;
	right: 0;
}
.footer .footer_box .code a{
	color: rgba(0,0,0,.8);
	cursor: pointer;
}
.footer .footer_box .code a:hover{
	color: #87CEFA;
}
</style>