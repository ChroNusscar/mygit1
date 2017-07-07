<template>
<div>
    <div class='home'>
        <mt-swipe :auto="1000" :show-indicators="false" class='swiper'>
            <mt-swipe-item v-for='img in pic'><img :src='img.imageUrl'></mt-swipe-item>
        </mt-swipe>
        <div class='now-playing'>
            <ul>
                <li v-for='playing in nowPlaying'>
                    <router-link :to="'Home/HomeDetail/'+playing.id">
                        <div class='item'>
                            <div class='pic'><img :src='playing.cover.origin'></div>
                            <div class='describe'>
                                <div class='describe-left'>
                                    <div class='describe-left-line1'>{{playing.name}}</div>
                                    <div class='describe-left-line2'>{{playing.cinemaCount}}家影院上映{{playing.watchCount}}人购票</div>
                                </div>
                                <div class='describe-right'>{{playing.grade}}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <router-link to='Movie'><div class='btn-more' @click='changeSelect1()'>更多热映电影</div></router-link>
            </ul>
        </div>
        <div class='coming-soon'>
            <div class='dividing-line'>
                <div class='upcoming'>即将上映</div>
            </div>
            <ul>
                <li v-for='soon in comingSoon'>
                <router-link :to="'Home/HomeDetail/'+soon.id">
                    <div class='item'>
                        <div class='pic'><img :src='soon.cover.origin'></div>
                        <div class='describe'>
                            <div class='describe-left'>
                                <div class='describe-left-line1'>{{soon.name}}</div>
                            </div>
                            <div class='describe-right'>{{soon.premiereAt | date}}上映</div>
                        </div>
                    </div>
                </router-link></li>
                <router-link to='Movie'><div class='btn-more' @click='changeSelect2()'>更多即将上映电影</div></router-link>
            </ul>
        </div>
        <!--<div class="cpn-back-to-top cpn-back-to-top-hide">
            <div class="circle" @click='back()'>
                <i class='iconfont icon-arrow-top'></i> 
            </div>
        </div>-->
    </div>
    <router-view></router-view>
    </div>
</template>
<script>

import axios from 'axios'
import Vue from 'vue'

import api from '../../common/api.js'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

    export default {
        data(){
            return{
                pic:[],
                nowPlaying:[],
                comingSoon:[],
                pnPage:1,
                pnCount:5,
                csPage:1,
                csCount:3
            }
        },
        filters : {
             // 计算时间戳
            date : function(value){
				var date = new Date(value);
				return `${date.getMonth()+1}月${date.getDate()}日`
			}
        },
        created(){

            // 请求轮播图数据
            axios.get(api.banner)
                    .then((response)=>{
                        // console.log(response);
                        this.pic = response.data.data.billboards;
                    })
                    .catch((error)=>{
                        console.log(error);
                    }),

            // 请求热映
            axios.get(api.playingNow + '&page='+this.pnPage+'&count='+this.pnCount)
                    .then((response)=>{
                        // console.log(response);
                        this.nowPlaying = response.data.data.films;
                    })
                    .catch((error)=>{
                        console.log(error);
                    }),
                    
            // 请求即将上映
            axios.get(api.comingSoon+'&page='+this.csPage+'&count='+this.csCount)
                    .then((response)=>{
                        // console.log(response);
                        this.comingSoon = response.data.data.films;
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
        },
        methods : {
            changeSelect1(){
                this.$store.commit('selected','1')
            },
            changeSelect2(){
                this.$store.commit('selected','2')
            },
            // back(){
            //     // window.onscroll = function() {
            //         // console.log(1)
            //         // let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //         // console.log(scrollTop);
            //         // console.log(scrollTop)
            //         document.documentElement.scrollTop = document.body.scrollTop = 0;
            //         // console.log(scrollTop)
            //     // }
            // }
        },
        // mounted(){

        //     window.onscroll = function() {
        //         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        //         // console.log(scrollTop);

        //         if(scrollTop >= 100){
        //             // console.log(scrollTop)
        //             // console.log(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class"))
        //             if(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")){
        //                 let classOld = document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")
        //             document.getElementsByClassName('cpn-back-to-top')[0].setAttribute("class",'cpn-back-to-top');
        //             }
                    
                    
        //         }else{
        //             // console.log("xia"+scrollTop)
        //             // console.log(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class"))
        //             if(document.getElementsByClassName('cpn-back-to-top')[0]){
        //                 let classOld = document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")
        //             document.getElementsByClassName('cpn-back-to-top')[0].setAttribute("class",'cpn-back-to-top cpn-back-to-top-hide')
        //             }
                    
        //         }
        //     }
        // }
    }
</script>
<style>
.home{
    width:100%;
    height:100%;
    overflow:auto;
}
.swiper{
    height:2.1rem;
}
.swiper img{
    width:100%;
    height:2.1rem;
}

/*热映*/
.now-playing ul{
    width:100%;
    padding-top:0.18rem;
    background:#f9f9f9;
}
.now-playing ul li{
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
}
.now-playing ul li div .pic{
    overflow: hidden;
    position: relative;
}
.now-playing ul li div .pic img{
    width:3.41rem;
    height:1.92rem;
}
.now-playing ul li .describe{
    width:100%;
    height:0.5rem;
    background:white;
}
.now-playing ul li .describe .describe-left{
    height: 0.5rem;
    padding-right: 0;
    padding-top: 0.08rem;
    padding-left: 0.1rem;
    width:80%;
    float: left;
}
.now-playing ul li .describe .describe-left .describe-left-line1{
    font-size: 0.12rem;
    line-height: 0.15rem;
    color: #333;
}
.now-playing ul li .describe .describe-left .describe-left-line2{
    font-size: 0.08rem;
    color: #9a9a9a;
    line-height: 0.15rem;
}
.now-playing ul li .describe .describe-right{
        width: 8%;
        color: #f78360;
        display: inline-block;
        line-height: 0.50rem;
        float: right;
        margin-right: 0.15rem;
        font-size: 0.18rem;
}
.now-playing ul .btn-more{
    width: 1.60rem;
    height: 0.30rem;
    border: 1px solid #aaa;
    border-radius: 0.15rem;
    margin: 10px auto 0.30rem;
    text-align: center;
    line-height: 0.30rem;
    font-size: 0.12rem;
    color: #616161;
    cursor: pointer;
}

/*即将上映*/
.coming-soon .dividing-line {
    position: relative;
    margin-top: 0.30rem;
    margin-bottom: 0.30rem;
    border-bottom: 1px solid #a8a8a8;
    height:0.11rem;
}
.coming-soon .dividing-line .upcoming {
    width: 0.65rem;
    height: 0.20rem;
    margin: 0 auto;
    margin-bottom: -0.10rem;
    border-radius: 0.05rem;
    font-size: 0.10rem;
    line-height: 0.20rem;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
}
.coming-soon ul{
    width:100%;
    padding-top:0.18rem;
    background:#f9f9f9;
}
.coming-soon ul li{
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
}
.coming-soon ul li div .pic{
    overflow: hidden;
    position: relative;
}
.coming-soon ul li div .pic img{
    width:3.41rem;
    height:1.92rem;
}
.coming-soon ul li .describe{
    width:100%;
    height:0.5rem;
    background:white;
}
.coming-soon ul li .describe .describe-left{
    height: 0.5rem;
    padding-right: 0;
    padding-top: 0.08rem;
    padding-left: 0.1rem;
    width:50%;
    float: left;
}
.coming-soon ul li .describe .describe-left .describe-left-line1{
    font-size: 0.12rem;
    line-height: 0.15rem;
    color: #333;
}
.coming-soon ul li .describe .describe-left .describe-left-line2{
    font-size: 0.08rem;
    color: #9a9a9a;
    line-height: 0.15rem;
}
.coming-soon ul li .describe .describe-right{
        width: 25%;
        color: #f78360;
        display: inline-block;
        line-height: 0.30rem;
        float: right;
        margin-right: 0.15rem;
        font-size: 0.1rem;
}
.coming-soon ul .btn-more{
    width: 1.60rem;
    height: 0.30rem;
    border: 1px solid #aaa;
    border-radius: 0.15rem;
    margin: 10px auto 0.30rem;
    text-align: center;
    line-height: 0.30rem;
    font-size: 0.12rem;
    color: #616161;
    cursor: pointer;
}
/*.cpn-back-to-top {
    transition: 800ms all ease;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 10px;
    z-index: 400;
}
.cpn-back-to-top .circle {
    background-color: rgba(0,0,0,0.7);
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.cpn-back-to-top i {
    font-size: 28px;
}

.cpn-back-to-top-hide {
    transform: translateY(68px);
}*/
</style>