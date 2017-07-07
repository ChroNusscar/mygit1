<template>
<div>
    <div class="home">
        <div class="banner">
            <div class="slick-initialized slick-slider">
                <div class="slick-list">
                    <mt-swipe :auto="2000">
                        <mt-swipe-item v-for='swip in market.banner'>
                            <router-link :to="'/Market/MarketBanner/'+swip.url.replace('http://m.maizuo.com/act/active/','')">
                            <div class="slick-slide" style="width: 375px;"><img :src="swip.imageSrc">
                            </div></router-link>
                        </mt-swipe-item>
                    </mt-swipe>   
                </div>
            </div>
        </div>
        <div class="billboards"></div>
        <div class="shops">
            <li class="shop" data-growing-idx="true" v-for='shop in market.category'>
                <router-link :to="'/Market/MarketCategory/'+ shop.url.replace('http://aura.maizuo.com/?showwxpaytitle=1#/category/','')"><img :src="shop.imageSrc"></router-link>
                <div class="category-name">{{shop.name}}</div>
            </li>
        </div>
        <div class="active">
            <div>
                <div class="line"></div>
                <div class="active-contain">
                    <div class="active-center">
                        <div class="active-left" data-growing-idx="true" v-for='input in market.input'>
                            <router-link :to="'/Market/MarketInput/'+ input.url.replace('http://aura.maizuo.com/?showwxpaytitle=1#/active/','')">
                            <div class="active-left-content" style="padding-right: 2.5px;"><img :src="input.imageSrc" alt=""></div>
                            </router-link>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="price active">
            <div class="line"></div>
            <div class="active-title">—&nbsp;有品专区&nbsp;—</div>
            <div class="active-contain">
                <div class="active-center">
                    <div class="active-left">
                        <div class="price-left-content" data-growing-idx="true" style="padding-right: 2.5px;">
                            <router-link :to="'/Market/MarketArea/'+ this.market.specialArea[0].url.replace('http://m.maizuo.com/act/active/','')">
                            <img :src="this.market.specialArea[0].imageSrc" alt="">
                            </router-link></div>
                            
                    </div>
                    <div class="active-left">
                        <div class="price-left-content" style="padding-left: 2.5px;">
                            <div class="top" data-growing-idx="true">
                                <router-link :to="'/Market/MarketGood/'+ this.market.specialArea[1].url.replace('http://aura.maizuo.com/?showwxpaytitle=1#/item/','')">
                                <img :src="this.market.specialArea[1].imageSrc" alt="">
                                </router-link></div>
                            <div class="bottom" data-growing-idx="true">
                                <router-link :to="'/Market/MarketGood/'+ this.market.specialArea[2].url.replace('http://aura.maizuo.com/?showwxpaytitle=1#/item/','')">
                                <img :src="this.market.specialArea[2].imageSrc" alt=""></router-link></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="subject">
            <div v-for='(ani,index) in market.ani'>
                <div class="line"></div>
                <div class="subject-center">
                    <div data-growing-idx="true">
                        <router-link :to="'/Market/MarketInput/'+ani.url.replace('http://aura.maizuo.com/?showwxpaytitle=1#/active/','')">
                        <img :src="ani.imageSrc" alt="">
                        </router-link>
                        </div>
                    <div class="pic-list">
                        <div class="slick-initialized slick-slider">
                            <div class="slick-list">
                                <div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                    <swiper :options="swiperOption">
                                        <swiper-slide v-for='good in market.ani[index].products'>
                                            
                                            <div class="slick-slide slick-active" style="outline: none; width: 109.231px;">
                                                <router-link :to="'/Market/MarketGood/'+ good.id">
                                                <div class="control-list">
                                                    <div class="pic-area">
                                                        <div class="control-pic"><img :src="good.image"></div>
                                                    </div>
                                                    <p class="control-name">{{good.name}}</p>
                                                    <p class="control-price">￥{{(good.price/100).toFixed(2)}}</p>
                                                </div>
                                                </router-link>
                                            </div>
                                        </swiper-slide>
                                        <div data-index="5" class="slick-slide" tabindex="-1" style="outline: none; width: 109.231px;"><span class="pic-list-right" data-growing-idx="true">全部</span></div>
                                    </swiper>
                                    
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="recommend">
            <div class="container">
                <div class="title">—&nbsp;好货精选&nbsp;—</div>
                <div class="items">
                    <div class="tailloader">
                        <div class="component-loading">暂无数据</div>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="tips">~貌似没有更多了~</div>
                </div>
            </div>
        </div>
        
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

   export default {
       data(){
           return{
               market:{
                    banner:[
                        {
                            imageSrc:'',
                            url:'/'
                        }
                    ],
                    category:[
                        {
                            imageSrc:'',
                            url:'/'
                        }
                    ],
                    input:[
                        {
                            imageSrc:'',
                            url:'/'
                        }
                    ],
                    specialArea:[
                        {
                            imageSrc:'',
                            url:'/'
                        },
                        {
                            imageSrc:'',
                            url:'/'
                        },
                        {
                            imageSrc:'',
                            url:'/'
                        }
                    ],
                    ani:[
                        {
                            imageSrc:'',
                            url:'/'
                        }
                    ]
               },
               swiperOption: {
                    pagination: '.swiper-pagination',
                    // slidesPerView: 3,
                    // paginationClickable: true,
                    spaceBetween: 30,
                    freeMode: true
                 }
           }
       },
       created(){
            axios.get('/ad/list')
            .then((response)=>{
                // console.log(response)
                // this.market = response.data.data;
                // console.log(this.market);
                let market = response.data.data;
                let marketObj = {
                    banner:[],
                    category:[],
                    input:[],
                    specialArea:[],
                    ani:[]
                };
                for(let i = 0;i < market.length;i++){
                    if(market[i].type == 1){
                        marketObj.category.push(market[i])
                    }else if(market[i].type == 2){
                        marketObj.banner.push(market[i])
                    }else if(market[i].type == 3){
                        marketObj.input.push(market[i])
                    }else if(market[i].type == 4){
                        marketObj.specialArea.push(market[i])
                    }else if(market[i].type == 5){
                        marketObj.ani.push(market[i])
                    }
                }

                this.market = marketObj;
                // console.log(this.market)
                // console.log(this.market.specialArea[0].url)
                
            })
            .catch((error)=>{
                console.log(error)
            })
       },
       components: {
            swiper,
            swiperSlide
        }
   } 
</script>

<style>
.home {
	overflow-x: hidden;
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}

.home .clear {
	clear: left
}

.home .banner {
	width: 100%
}

.home .banner .slick-dots {
	position: absolute;
	bottom: -1px;
	display: block;
	width: 100%;
	padding: 0;
	margin: 0;
	list-style: none;
	text-align: center
}

.home .banner img {
	width: 100%
}

.home .billboards {
	margin: 0 auto
}

.home .billboards .slick-dots {
	bottom: 0!important
}

.home .billboards img {
	width: 100%
}

.home .active {
	background: #fff
}

.home .active .line {
	height: 8px;
	background: #f2f2f2
}

.home .active .singleActive {
	width: 100%;
	padding-bottom: 5px
}

.home .active .singleActive img {
	width: 100%
}

.home .active .active-contain {
	padding-left: 10px;
	padding-right: 10px
}

.home .active .active-contain .active-center .active-left {
	float: left;
	width: 49%;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
    padding-left:3px;
}

.home .active .active-contain .active-center .active-left .active-left-content {
	display: inline-block;
	width: 100%
}

.home .active .active-contain .active-center .active-left .active-left-content img {
	width: 100%;
	vertical-align: bottom
}

.home .active .active-contain .active-center .active-left .price-left-content {
	display: inline-block;
	width: 100%
}

.home .active .active-contain .active-center .active-left .price-left-content img {
	width: 100%;
	vertical-align: bottom
}

.home .active .active-contain .active-center .active-left .price-left-content .top {
	margin-bottom: 5px
}

.home .price {
	text-align: center
}

.home .price .line {
	height: 8px;
	background: #f2f2f2
}

.home .price .active-title {
	height: 13px;
	font-size: 13px;
	line-height: 13px;
	text-align: center;
	margin-top: 10px;
	color: #323232
}

.home .subject {
	width: 100%
}

.home .subject .line {
	height: 8px;
	background: #f2f2f2
}

.home .subject .subject-center {
	padding: 10px;
	background: #fff
}

.home .subject .subject-center img {
	width: 100%
}

.home .subject .subject-center .pic-list {
	height: 140px
}

.home .subject .subject-center .pic-list .pic-list-right {
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid #ccc;
	line-height: 50px;
	text-align: center;
	font-size: 12px;
	color: #ccc;
	display: inline-block;
	margin-top: 30px
}

.home .subject .subject-center .pic-list .control-list .pic-area {
	width: 85px;
	height: 85px
}

.home .subject .subject-center .pic-list .control-list .new {
	width: 20px;
	height: 9px;
	background-color: #b8e986;
	font-size: 7px;
	color: #fbf9f9;
	line-height: 9px
}

.home .subject .subject-center .pic-list .control-list .control-pic {
	width: 100%
}

.home .subject .subject-center .pic-list .control-list .control-name {
	font-size: 12px;
	color: #323232;
	height: 14px;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    overflow:hidden;
}

.home .subject .subject-center .pic-list .control-list .control-price {
	font-size: 13px;
	color: #ff6640;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
}

.home .recommend .container .title {
	height: 33px;
	background-color: #f2f2f2;
	line-height: 33px;
	font-size: 13px;
	text-align: center;
	color: #323232;
	margin-bottom: -5px
}

.home .recommend .container .items {
	background-color: #f2f2f2;
	min-height: 510px;
	padding-right: 10px;
	padding-left: 10px
}

.home .recommend .container .items .tips {
	text-align: center;
	font-size: 12px;
	color: #999
}

.home .recommend .container .items .odd {
	padding-left: 2.5px
}

.home .recommend .container .items .even {
	padding-right: 2.5px
}

.home .recommend .container .items .item {
	position: relative;
	float: left;
	width: 50%;
	text-align: center;
	padding-top: 5px
}

.home .recommend .container .items .item .logo {
	display: inline-block;
	width: 100%;
	background: #fff
}

.home .recommend .container .items .item .logo img {
	width: 100%
}

.home .recommend .container .items .item .logo .name {
	font-size: 12px;
	height: 34px;
	color: #323232;
	text-align: left;
	padding-left: 6px
}

.home .recommend .container .items .item .logo .content {
	text-align: left;
	padding-bottom: 10px
}

.home .recommend .container .items .item .logo .content .price {
	font-size: 13px;
	color: #ff5000;
	padding-left: 6px
}

.home .recommend .container .items .item .logo .content .inventory {
	font-size: 9px;
	color: #999;
	margin-left: 15px
}

.home .recommend .container .items .items-loading {
	text-align: center;
	padding: 6px;
	font-size: 10px;
	color: #7d7d7d
}

.home .shops {
	background-color: #fff;
	padding: 15px 0
}

.home .shops .shop {
	width: 24%;
	height: 100%;
	margin: 8px 0;
	text-align: center;
	display: inline-block
}

.home .shops .shop img {
	width: 40px
}

.home .shops .shop .category-name {
	font-size: 12px;
	text-align: center;
	color: #323232
}

.home .shops .no-right-border,
.home .shops :last-child {
	border-right: none
}
.slick-slider {
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-touch-callout: none;
	-khtml-user-select: none;
	-ms-touch-action: pan-y;
	touch-action: pan-y;
	-webkit-tap-highlight-color: transparent
}

.slick-list,
.slick-slider {
	position: relative;
	display: block
}

.slick-list {
	overflow: hidden;
	margin: 0;
	padding: 0
}

.slick-list:focus {
	outline: none
}

.slick-list.dragging {
	cursor: pointer;
	cursor: hand
}

.slick-slider .slick-list,
.slick-slider .slick-track {
	-webkit-transform: translateZ(0);
	transform: translateZ(0)
}

.slick-track {
	position: relative;
	top: 0;
	left: 0;
	display: block
}

.slick-track:after,
.slick-track:before {
	display: table;
	content: ''
}

.slick-track:after {
	clear: both
}

.slick-loading .slick-track {
	visibility: hidden
}

.slick-slide {
	display: none;
	float: left;
	height: 100%;
	min-height: 1px
}

[dir=rtl] .slick-slide {
	float: right
}

.slick-slide img {
	display: block
}

.slick-slide.slick-loading img {
	display: none
}

.slick-slide.dragging img {
	pointer-events: none
}

.slick-initialized .slick-slide {
	display: block
}

.slick-loading .slick-slide {
	visibility: hidden
}

.slick-vertical .slick-slide {
	display: block;
	height: auto;
	border: 1px solid transparent
}

.slick-arrow.slick-hidden {
	display: none
}
.component-loading {
    width: 65px;
    margin: 0 auto;
    text-align: center;
    font-size:12px;
}
.banner .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 1.07rem;
    z-index:5;
}
.swiper-slide{
    width:1.09rem !important;
}
</style>

