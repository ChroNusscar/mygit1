<template>
  <div class='cinemagood'>
      <section class="sundry-list-view" data-reactid=".0.1.$SundryListView-cinema-2791">
	<div data-reactid=".0.1.$SundryListView-cinema-2791.0">
		<h4 class="cinema-name" data-reactid=".0.1.$SundryListView-cinema-2791.0.0">
      {{this.cinema.name}}</h4><span class="address" data-reactid=".0.1.$SundryListView-cinema-2791.0.1">{{this.cinema.address}}</span>
		<div class="sundry-wrap " v-for='item in goodlist'>
			<div class="wrap-above" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.0"><img class="sundry-logo" :src="item.extra.sundry.imageUrl" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.0.0"><span class="sundry-title" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.0.1">{{item.name}}</span><span class="sundry-describe" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.0.2">
        {{item.notices[0]}}</span></div>
			<div class="wrap-below" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1"><span class="now-price" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.0">¥{{item.price.maizuo.toFixed(2)}}</span><span class="sundry-describe price" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.1">¥{{item.price.cinema.toFixed(2)}}</span><span class="sundry-counter" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2"><span class='circlebg'><i class="iconfont icon-jianhao1" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.0.0"></i></span>
				<a class="number" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.1"><span data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.1.0"> </span><span data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.1.1">0</span><span data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.1.2"> </span></a><span class='circlebg'><i class="iconfont icon-anonymous-iconfont" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.1.2.2.0"></i></span></span>
			</div><span class="label" data-reactid=".0.1.$SundryListView-cinema-2791.0.2:$13540.2"></span></div>
		<div class="guide-wrap" data-reactid=".0.1.$SundryListView-cinema-2791.0.3">
			<h3 class="guide-title" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.0">兑换流程</h3><span class="guide-arrow" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.1"></span>
			<div class="force-center" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2">
				<div class="guide" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$0"><span class="guide-step" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$0.0">第 1 步</span><span class="guide-text" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$0.1">购买小卖品得到取票码</span></div>
				<div class="guide" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$1"><span class="guide-step" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$1.0">第 2 步</span><span class="guide-text" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$1.1">凭取票码到影院自助取票</span></div>
				<div class="guide" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$2"><span class="guide-step" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$2.0">第 3 步</span><span class="guide-text" data-reactid=".0.1.$SundryListView-cinema-2791.0.3.2.$2.1">影院卖品柜台兑换</span></div>
			</div>
		</div>
		<div class="cart" data-reactid=".0.1.$SundryListView-cinema-2791.0.4">
			<div class="cart-btn" data-reactid=".0.1.$SundryListView-cinema-2791.0.4.1"><button class="cancel" data-reactid=".0.1.$SundryListView-cinema-2791.0.4.1.0">不需要</button><button class="confirm" data-reactid=".0.1.$SundryListView-cinema-2791.0.4.1.1">购买</button></div>
		</div>
	</div>
</section>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../common/api.js'
    export default {
      data(){
        return{
          goodlist:[],
          cinema:{}
        }
      },
      created(){
        axios.get(api.host+'/cinema/'+this.$route.params.cinemaId+'/item?__t='+new Date()*1)
        .then((response)=>{
          // console.log(response)
          response.data.data.items.map((item,index)=>{
                    if(item.type == 6)
                        this.goodlist.push(item);
                })
                // console.log(this.goodlist)
        })
        .catch((error)=>{
          console.log(error)
        }),

        axios.get(api.host+'/cinema/'+this.$route.params.cinemaId+'?__t='+new Date()*1)
        .then((response)=>{
          // console.log(response)
          this.cinema = response.data.data.cinema;
          // console.log(this.cinema)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    }
</script>

<style>
.cinemagood span{
  font-size:12px;
}
.cinemagood {
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
  .sundry-list-view {
  padding: 10px !important;
  position: absolute;
  min-height: 100%;
  width: 94%;
  background: #00abcc;
}
.sundry-list-view .cinema-name {
  text-align: center;
  color: #fff;
}
.sundry-list-view .address {
  color: rgba(255,255,255,0.6);
  display: table;
  text-align: center;
  width: 100%;
}
.sundry-list-view .sundry-support {
  color: rgba(255,255,179,0.8);
  display: inline-block;
  text-align: center;
  width: 100%;
}
.sundry-list-view .sundry-wrap {
  width: 92%;
  min-width: 300px;
  padding: 14px;
  display: block;
  margin: 10px auto 0 auto;
  border-radius: 4px;
  background: rgba(255,255,255,0.9);
  position: relative;
}
.sundry-list-view .wrap-above {
  display: inline-block;
  width: 100%;
}
.sundry-list-view .sundry-logo {
  width: 78px;
  height: 78px;
  float: left;
  border: 0;
  margin-right: 14px;
}
.sundry-list-view .label {
  color: #ff8132;
  border-radius: 4px;
  border: 1px solid #ff8132;
  padding: 2px;
  text-align: center;
  position: absolute;
  right: 8px;
  top: 16px;
  font-weight: normal;
}
.sundry-list-view .sundry-title {
  font-size: 16px;
  display: inline-block;
}
.sundry-list-view .sundry-title.petty {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (min-width: 320px) and (max-width: 375px) {
  .sundry-list-view .sundry-title.petty {
    max-width: 33%;
  }
}
@media (min-width: 375px) and (max-width: 640px) {
  .sundry-list-view .sundry-title.petty {
    max-width: 45%;
  }
}
.sundry-list-view .sundry-describe {
  color: #d3d3d3;
  display: block;
}
.sundry-list-view .now-price {
  width: 78px;
  margin: 4px 12px 0 0;
  display: inline-block;
  color: #ff8132;
  text-align: center;
}
.sundry-list-view .price {
  text-decoration: line-through;
  display: inline-block;
}
.sundry-list-view .sundry-counter {
  display: inline-block;
  float: right;
  min-width: 90px;
  top: -12px;
  background: #fff;
  font-size: 18px;
  line-height: 28px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.sundry-list-view .sundry-counter .circlebg{
  display:inline-block;
  width:0.24rem;
  height:0.24rem;
  background:#00abcc;
  border-radius:100%;
}
.sundry-list-view .sundry-counter .number {
  color: #ff8132;
  display: inline-block;
  margin: 2px;
}
.sundry-list-view .sundry-counter .number span{
  font-size:16px;
}
.sundry-list-view .sundry-counter .iconfont {
  font-size: 20px;
  color: white;
  margin: 2px;
  line-height: 24px;
}
.sundry-list-view .sundry-counter .icon-reduce-filled {
  float: left;
}
.sundry-list-view .sundry-counter .icon-add-filled {
  float: right;
}
.sundry-list-view .guide-wrap {
  margin-bottom: 156px;
}
.sundry-list-view .guide-wrap .guide-title {
  width: 76px;
  color: #fff;
  margin: 24px auto 10px auto;
}
.sundry-list-view .guide-wrap .guide-arrow {
  width: 96px;
  display: block;
  margin: 0 auto;
  height: 11px;
  background-image: url(//static.m.maizuo.com/v4/static/app/asset/d50a6f566d24ff6eb76e59907f71a9b1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.sundry-list-view .guide-wrap .force-center {
  width: 300px;
  margin: 10px auto;
}
.sundry-list-view .guide-wrap .guide {
  padding: 5px 10px;
  border-radius: 4px;
  background: rgba(0,0,0,0.2);
  color: rgba(255,255,255,0.9);
  width: 25%;
  height: 50px;
  display: block;
  margin: 2px;
  float: left;
}
.sundry-list-view .guide-wrap .guide-step {
  display: block;
  color: rgba(255,255,179,0.8);
}
.sundry-list-view .guide-wrap .guide-text {
  display: block;
}
.sundry-list-view .cart {
  background: rgba(255,255,255,0.8);
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  min-height: 48px;
  text-align: center;
  font-size: 14px;
}
.sundry-list-view .cart .total {
  line-height: 18px;
  padding-top: 4px;
}
.sundry-list-view .cart .detail {
  display: block;
  color: #ff8132;
  font-size: 10px;
}
.sundry-list-view .cart .cart-btn {
  height: 24px;
  padding: 10px 0;
  background: #fff;
  width: 100%;
  bottom: 0;
}
.sundry-list-view .cart button {
  width: 50%;
  height: 28px;
  background: #fff;
  border: none;
}
.sundry-list-view .cart .confirm {
  color: #ff8132;
}
.sundry-list-view .cart .cancel {
  border-right: 1px dotted #dedede;
}

</style>

