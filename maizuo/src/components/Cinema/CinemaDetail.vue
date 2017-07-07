<template>
<div>
  <div class="cinema-view cinema-detail-view">
      <div class="row">
          <div class="col-xs-12">
              <div class="img-responsive">
                  <img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png" alt="">
              </div>
          </div>
      </div>
      <div class="row detail-box clearfix">
          <div class="box-warp">
              <div class="img pull-left">
                  <i class='iconfont icon-zuowei'></i>
              </div>
              <div class="box">
                  <h3>订座票</h3>
                  <span>选好场次及座位，到影院自助机取票</span>
                  <router-link :to="'/Cinema/CinemaDetail/'+this.cinemaDetail.id+'/site'"><button class="btn-default seat-btn">立即订座</button></router-link>
              </div>
          </div>
      </div>
      <div class="row detail-box">
          <div class="box-warp">
              <div class="img pull-left">
                  <i class='iconfont icon-piao'></i>
              </div>
              <div class="box">
                  <h3>通兑票</h3>
                  <span>有效期内到影院前台兑换影票</span>
                  <router-link :to="'/Cinema/CinemaDetail/'+this.cinemaDetail.id+'/ticket'"><button class="btn-default youhui-btn" @click='changeTitle2()'>立即订票</button></router-link>
              </div>
          </div>
      </div>
      <div class="row detail-box">
          <div class="box-warp">
              <div class="img pull-left">
                  <i class='iconfont icon-iconfontcola'></i>
              </div>
              <div class="box">
                  <h3>小卖品</h3>
                  <router-link :to="'/Cinema/CinemaDetail/'+this.cinemaDetail.id+'/good'"><button class="btn-default sundry-btn" @click='changeTitle3()'>立即订票</button></router-link>
              </div>
          </div>
      </div>
      <div class="row detail-box">
          <div class="box-warp">
              <div class="img pull-left">
                  <i class='iconfont icon-dingwei'></i>
              </div>
              <div class="box">
                  <h4>{{this.cinemaDetail.address}}</h4>
              </div>
          </div>
      </div>
      <div class="row detail-box">
          <div class="box-warp">
              <div class="img pull-left">
                  <i class='iconfont icon-dianhua-copy'></i>
              </div>
              <div class="no_border box">
                  <h4>{{this.cinemaDetail.telephones[0]}}</h4>
              </div>
          </div>
      </div>
      <div class="row other-detail-box">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">
                    <span><i class='iconfont icon-piao'></i></span>
                    <span>取票</span>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <span><i class='iconfont icon-glasses'></i></span>
                    <span>3D</span>
                </mt-tab-item>
                <mt-tab-item id="3">
                    <span><i class='iconfont icon-tingche'></i></span>
                    <span>停车</span>
                </mt-tab-item>
                <mt-tab-item id="4">
                    <span><i class='iconfont icon-liwu'></i></span>
                    <span>优惠</span>
                </mt-tab-item>
                <mt-tab-item id="5">
                    <span><i class='iconfont icon-bus'></i></span>
                    <span>交通</span>
                </mt-tab-item>
            </mt-navbar>

                <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <mt-cell :title='this.tag.tic'/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell :title='this.tag.tD' />
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell :title='this.tag.stop' />
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <mt-cell :title='this.tag.pay' />
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <mt-cell :title='this.tag.trans' />
                </mt-tab-container-item>
            </mt-tab-container>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';
import Vue from 'vue'
import axios from 'axios'
import api from '../../common/api.js'

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
    data(){
        return{
            cinemaDetail:{
                address:'',
                telephones:['']
            },
            selected:'1',
            tag:{
                'tic':'暂无信息',
                'tD':'暂无信息',
                'stop':'暂无信息',
                'pay':'暂无信息',
                'trans':'暂无信息'
            }
        }
    },
    created(){
        axios.get(api.host+'/cinema/'+this.$route.params.cinemaId+'?__t='+new Date()*1)
        .then((response)=>{
            // console.log(response)
            this.cinemaDetail = response.data.data.cinema;
            // console.log(this.cinemaDetail)
                 let tag = this.cinemaDetail.services;
                    tag.map((item,index)=>{
                        if(item.type == 1){
                            this.tag.tic = item.description;
                        }else if(item.type == 2){
                            this.tag.stop = item.description;
                        }else if(item.type == 3){
                            this.tag.tD = item.description;
                        }else if(item.type == 4){
                            this.tag.pay = item.description;
                        }else if(item.type == 5){
                            this.tag.trans = item.description;
                        }
                    }) 
        })
        .catch((error)=>{
            console.log(error)
        })   
    },
    methods : {
        changeTitle2(){
            this.$store.commit('increment','选择通兑票')
        },
        changeTitle3(){
            this.$store.commit('increment','特惠小卖品')
        }
    }
}
</script>

<style>
button, a {
    outline: none;
}
.cinema-view {
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.cinema-view .row img{
    width:100%;
}
.cinema-view.cinema-detail-view {
    background-color: #ebebeb !important;
    padding: 0;
    margin: 0 auto;
    max-width: 640px;
}
.cinema-view .detail-box {
    padding: 0.25px 17px 0;
    background-color: #f9f9f9;
    text-align: center;
}
.cinema-view .detail-box .box-warp {
    display: inline-block;
    width: 100%;
    min-width: 286px;
    text-align: left;
}
.cinema-view .detail-box div.img {
    margin: 15px 17px 0 0;
}
.pull-left {
    float: left !important;
}
.cinema-view .detail-box div.img i.icon-zuowei {
    color: #ff8160;
    font-size: 28px;
}
.cinema-view .detail-box div.box {
    border-bottom: 1px #d6d6d6 dotted;
    position: relative;
    padding-bottom: 25px;
    margin-left: 45px;
}
.cinema-view .detail-box h3 {
    font-size: 15px;
    color: #000;
}
h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
.cinema-view .detail-box div.box span {
    color: #737373;
    font-size:0.02rem;
}
.cinema-view .detail-box .btn-default {
    width: 94px;
    border-radius: 38px;
    height: 34px;
    border: none;
    font-size: 13px;
    position: absolute;
    right: 0px;
    top: -10px;
}
.cinema-view .detail-box .seat-btn {
    background-color: #fe8233;
    color: #fff;
}
.cinema-view .detail-box div.img i.icon-piao {
    color: #40b5b5;
    font-size: 28px;
}
.cinema-view .detail-box .youhui-btn, .cinema-view .detail-box .check-btn {
    color: #ff8032;
    background-color: #f9f9f9;
    border: 1px solid #ff8032;
}
.cinema-view .detail-box div.img i.icon-iconfontcola {
    color: #3697d1;
    font-size: 28px;
}
.cinema-view .detail-box .sundry-btn, .cinema-view .detail-box .seat-btn {
    background-color: #fe8233;
    color: #fff;
}
.cinema-view .detail-box div.img i.icon-dingwei {
    color: #7bafe1;
    font-size: 28px;
}
.cinema-view .detail-box h4 {
    font-size: 14px;
    color: #000;
}
.cinema-view .detail-box div.img i.icon-dianhua-copy {
    color: #df8f9f;
    margin-top: 5px;
    font-size: 28px; 
    position:relative;
    bottom:0.2rem;
}
.cinema-view .no_border {
    border: none !important;
}
.other-detail-box{
    margin-top:0.2rem;
}
.mint-navbar{
    padding-left:0.3rem;
    padding-right:0.3rem;
}
.mint-tab-item-label{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.mint-tab-item-label span:nth-child(1){
    width:0.38rem;
    height:0.38rem;
    border:1px solid #cdcdcd;
    border-radius:100%;
    line-height:0.38rem;
}
.mint-tab-item-label span:nth-child(1) i{
    font-size:0.3rem;
}
.mint-tab-item-label span:nth-child(2){
    padding-top:0.06rem;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 6px solid #26a2ff;
}
.mint-cell-title .mint-cell-text{
    margin: 0 0 10px;
    font-size:0.02rem;
}
</style>
