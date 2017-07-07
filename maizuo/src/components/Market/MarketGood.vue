<template>
    <div class='marketGood'>
        <div class="item">
	<div class="item-detail">
		<div class="item-body">
			<div class="carousel">
				<div class="slick-initialized slick-slider">
					<div class="slick-list">
                        <mt-swipe :auto="2000">
                            <mt-swipe-item v-for='swip in good.skuList[0].images'>
                                <div class="slick-slide" style="width: 375px;"><img :src="swip" style='z-index:5;'>
                                </div>
                            </mt-swipe-item>
                        </mt-swipe>   
					</div>
				</div>
			</div>
			<div class="item-info">
				<div class="name">
					<!-- react-text: 90 -->{{this.good.masterName}}
					<!-- /react-text -->
					<!-- react-text: 91 -->
					<!-- /react-text -->
					<!-- react-text: 92 -->
					<!-- /react-text -->
				</div>
				<div class="subname">{{this.good.slaveName}}</div>
				<div class="price">
					<div class="price">
						<!-- react-text: 96 -->￥
						<!-- /react-text -->
						<!-- react-text: 97 -->{{(this.good.skuList[0].marketPrice/100).toFixed(2)}}
						<!-- /react-text -->
					</div>
				</div>
				<div class="tips">
					<div class="express-fee">快递：{{this.good.isMember.toFixed(2)}} 元</div>
					<div class="sold-amount">
						<!-- react-text: 101 -->销量：
						<!-- /react-text -->
						<!-- react-text: 102 -->{{this.good.displaySalesCount}}
						<!-- /react-text -->
					</div>
					<div class="location">全国</div>
				</div>
			</div>
			<div class="sku-pick">
				<!-- react-text: 105 -->选择 规格 数量
				<!-- /react-text --><i class="iconfont icon-icon "></i></div>
			<div class="sku-box sku-box-hide">
				<div class="box-body">
					<div class="box-sku-info">
						<div class="box-sku-head clearfix">
							<div class="sku-pic"><img src="http://mall.s.maizuo.com/8342217d31e163c51134e5939f8f5538.jpg?x-oss-process=image/resize,m_fill,h_100,w_100" alt="initSku.name"></div>
							<div class="sku-context">
								<div class="price">￥350.00</div>
								<div class="name">选择 规格 数量</div>
							</div>
							<div><i class="iconfont icon-close "></i></div>
						</div>
					</div>
					<div class="sku-select">
						<div class="box-sku-list">
							<div class="option-name">颜色</div>
							<div class="option-list"><span>浅蓝色</span><span>蓝黑色</span></div>
						</div>
					</div>
					<div class="box-count">
						<div class="count-title">选择数量</div>
						<div class="count-body">
							<div class="count-type"><span class="icon disable left">-</span><span class="center">1</span><span class="count-no-border icon right">+</span></div>
						</div>
					</div>
					<div class="box-bottom"></div>
				</div>
			</div>
			<div class="item-bottom">
				<div class="item-footer-left item-footer-button">
					<div class="item-footer-home item-footer-icon">
						<i class="iconfont icon-shouye"></i>
						<div class="foot-icon-text">首页</div>
					</div>
				</div>
				<div class="item-footer-right item-footer-act">立即购买</div>
			</div>
			<div class="toast toast-disable">
				<div class="toast-context context-disable">请选择规格数量</div>
			</div>
		</div>
	</div>
	<div class="desc desc-show">
		<div class="desc-wrap" v-html='desc'>
			
		</div>
	</div>
	<div class="empty-bottom"></div>
</div>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);






    export default {
        data(){
            return{
                desc:'',
                good:{
					skuList:[
						{
							image:'',
							marketPrice:'0'
						}
					],
					isMember:0
				}
            }
        },
        created(){

            axios.get('/item?id='+this.$route.params.marketGoodId)
            .then((response)=>{
                console.log(response)
                this.good = response.data.data;
                // console.log(this.good)
            })
            .catch((error)=>{
                console.log(error)
            })

            axios.get('/item/desc?id='+this.$route.params.marketGoodId)
            .then((response)=>{
                // console.log(response)
                this.desc = response.data.data.desc;
                // console.log(this.desc)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style>
.marketGood{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.item .item-detail {
	width: 100%;
	overflow-x: hidden
}

.item .item-detail .share-image {
	position: absolute;
	top: 0;
	opacity: 0;
	z-index: 1;
	width: 100%
}

.item .item-detail .share-image img {
	width: 100%
}

.item .item-detail .item-body {
	position: relative;
	z-index: 2
}

.item .item-detail .carousel,
.item .item-detail .carousel img {
	width: 100%
}

.item .item-detail .carousel .slick-dots {
	bottom: 5px;
	margin-bottom: 0
}

.item .item-detail .item-info {
	padding: 4px 10px;
	background: #fff
}

.item .item-detail .item-info .name {
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.item .item-detail .item-info .subname {
	font-size: 12px;
	color: #757575;
	margin-top: 4px
}

.item .item-detail .item-info .price {
	margin-top: 4px;
	color: #ff5000;
	font-size: 21px;
	font-weight: 700
}

.item .item-detail .item-info .price span {
	font-size: 18px
}

.item .item-detail .item-info .tips {
	margin: 2px 0;
	font-size: 12px
}

.item .item-detail .express-fee,
.item .item-detail .location,
.item .item-detail .sold-amount {
	display: inline-block;
	width: 32%;
	color: #757575
}

.item .item-detail .sold-amount {
	text-align: center
}

.item .item-detail .location {
	text-align: right
}

.item .item-detail .sku-pick {
	margin: 10px 0;
	height: 45px;
	line-height: 45px;
	font-size: 14px;
	padding: 0 12px;
	background-color: #fff
}

.item .item-detail .sku-pick i {
	float: right
}

.item .item-detail .sku-pick .count-num {
	margin-left: 2px
}

.item .item-detail .item-bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 48px;
	border-top: 1px solid #ececec;
	background-color: #fff;
	z-index: 100;
	max-width: 600px
}

.item .item-detail .item-bottom .item-footer-left {
	float: left;
	width: 66%;
	height: 100%;
	text-align: left;
	line-height: 24px
}

.item .item-detail .item-bottom .item-footer-left .item-footer-icon {
	text-align: center;
	display: inline-block;
	width: 30%;
	padding: 4px 0
}

.item .item-detail .item-bottom .item-footer-left .item-footer-icon .footer-icon-pic {
	font-size: 24px;
	height: 22px
}

.item .item-detail .item-bottom .item-footer-left .item-footer-home i {
	font-size: 18px
}

.item .item-detail .item-bottom .item-footer-left .item-footer-home .foot-icon-text {
	font-size: 10px;
	margin-top: -8px;
	opacity: .54
}

.item .item-detail .item-bottom .item-footer-right {
	color: #fff;
	font-size: 16px;
	float: right;
	width: 33%;
	height: 100%;
	text-align: center;
	line-height: 48px;
	background-color: #ff5000
}

.item .item-detail .item-bottom .item-footer-disable {
	background-color: hsla(0, 0%, 78%, .8);
	color: #fff
}

.item .item-detail .item-bottom .disable {
	background-color: #5d5d5d
}

.item .item-detail .description {
	margin: 10px 0;
	min-height: 200px;
	background: #fff;
	padding: 10px;
	overflow-x: hidden;
	word-wrap: break-word;
	word-break: normal
}

.item .item-detail .toast {
	position: fixed;
	bottom: 200px;
	z-index: 10000;
	width: 100%;
	-webkit-transition: all .2s ease-in;
	transition: all .2s ease-in
}

.item .item-detail .toast .toast-context {
	-webkit-transition: all .2s ease-in;
	transition: all .2s ease-in;
	text-align: center;
	margin: 0 25%;
	background: rgba(40, 40, 40, .7);
	border-radius: 5px;
	color: #fff;
	line-height: 40px;
	font-size: 14px
}

.item .item-detail .toast-disable {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0)
}

.item .item-detail .context-show,
.item .item-detail .toast-show {
	opacity: 1
}

.item .item-detail .context-disable {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0)
}

.item .empty-bottom {
	height: 50px
}

.item .desc-bar {
	background-color: #fff;
	line-height: 42px;
	padding: 0 12px
}

.item .desc-bar span {
	width: 30%;
	display: inline-block;
	margin: 0 10%;
	text-align: center
}

.item .desc-bar .show {
	box-shadow: inset 0 -3px #ff8132
}

.item .desc-bar-top {
	position: fixed;
	top: 0;
	width: 100%
}

.item .desc {
	width: 100%
}

.item .desc .desc-wrap {
	background-color: #fff;
	padding: 8px
}

.item .desc .desc-wrap img {
	width: 100%!important;
	height: 100%!important;
	display: inherit
}

.item .desc-hide {
	display: none
}

.item .sku-box {
	height: 100%;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	background-color: rgba(0, 0, 0, .3);
	max-width: 600px
}

.item .sku-box .box-body {
	background-color: #fff;
	position: absolute;
	width: 100%;
	bottom: 0;
	max-width: 600px
}

.item .sku-box .box-body .box-sku-info {
	padding: 10px 10px 0
}

.item .sku-box .box-body .box-sku-info .box-sku-head i {
	position: absolute;
	right: 12px;
	top: 12px;
	border-radius: 50%;
	border: 1px solid #a2a2a2;
	color: gray;
	padding: 4px;
	height: 16px;
	width: 16px;
	text-align: center;
	line-height: 16px
}

.item .sku-box .box-body .box-sku-info .sku-pic {
	float: left;
	width: 88px;
	height: 88px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	overflow: hidden;
	margin-bottom: 10px
}

.item .sku-box .box-body .box-sku-info .sku-pic img {
	width: 100%;
	display: block
}

.item .sku-box .box-body .box-sku-info .sku-context {
	float: left;
	margin-left: 16px
}

.item .sku-box .box-body .box-sku-info .sku-context .price {
	font-size: 18px;
	margin-top: 40px;
	color: #ff5000
}

.item .sku-box .box-body .sku-select {
	padding: 0 10px;
	max-height: 200px;
	overflow-y: scroll
}

.item .sku-box .box-sku-list {
	border-top: 1px solid #f2f2f2
}

.item .sku-box .box-sku-list span {
	border: 1px solid rgba(0, 0, 0, .3);
	padding: 5px 16px;
	border-radius: 2px;
	font-size: 10px;
	margin: 4px 8px 4px 0;
	display: inline-block
}

.item .sku-box .box-sku-list span.pick {
	border: 1px solid #ff5000;
	color: #ff5000
}

.item .sku-box .box-sku-list span.disable {
	opacity: .16;
	border: 1px dashed #000
}

.item .sku-box .box-sku-list .option-name {
	margin-top: 8px;
	font-size: 14px
}

.item .sku-box .box-sku-list .option-list {
	margin-bottom: 4px
}

.item .sku-box .box-bottom {
	height: 48px
}

.item .sku-box .box-count {
	border-top: 1px solid #f2f2f2;
	margin: 0 10px
}

.item .sku-box .box-count .count-title {
	margin: 12px 0 4px;
	font-size: 14px
}

.item .sku-box .box-count .count-body {
	margin: 8px 0
}

.item .sku-box .box-count .count-type {
	display: inline-block
}

.item .sku-box .box-count .count-type span {
	line-height: 28px;
	float: left;
	height: 28px;
	color: #000;
	width: 40px;
	text-align: center;
	border: 1px solid rgba(0, 0, 0, .4)
}

.item .sku-box .box-count .count-type span.disable {
	color: rgba(0, 0, 0, .3);
	border: 1px solid rgba(0, 0, 0, .3)
}

.item .sku-box .box-count .count-type span.left {
	border-right: none;
	border-bottom-left-radius: 2px;
	border-top-left-radius: 2px
}

.item .sku-box .box-count .count-type span.icon {
	font-size: 20px;
	line-height: 24px
}

.item .sku-box .box-count .count-type span.count-no-border {
	border-left: none;
	border-bottom-right-radius: 2px;
	border-top-right-radius: 2px
}

.item .sku-box .box-count .inventory-tips {
	display: inline-block;
	margin-left: 8px;
	font-size: 10px;
	color: #ff5000
}

.item .sku-box-hide {
	display: none
}

.item .not-exist .not-exist-wrap {
	text-align: center;
	padding-top: 100px
}

.item .not-exist .not-exist-wrap img {
	zoom: 50%
}

.item .not-exist .not-exist-wrap .content {
	color: #000;
	opacity: .24;
	margin-top: 16px;
	font-size: 14px
}
.carousel .mint-swipe {
    height: 3.75rem;
}
.desc-wrap img{
    width:3.6rem !important;
}
</style>

