<template>
<div class='ticketAll'>
    <section class="cinema-goods-info" data-reactid=".0.1.$CinemaGoodsInfoView-2791">
      <div class="ticket_warp center-block clearfix" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0" v-for='ticket in tickets'>
        <div class="ticket" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0">
          <div class="ticket_iner clearfix" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0">
            <div class="ticket-type pull-left" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.0"><span class="title" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.0.0">{{ticket.name}}</span><span class="msg" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.0.1">可在本影院兑换2D电影票</span></div>
            <div class="ticket-price pull-left" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.1"><span class="now-price" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.1.0">￥{{ticket.price.maizuo.toFixed(2)}}</span><span class="price" data-reactid=".0.1.$CinemaGoodsInfoView-2791.0:$0.0.0.1.1">￥{{ticket.price.cinema.toFixed(2)}}</span></div>
          </div>
        </div>
      </div>
	
	    <div class="show_ticket_type pull-right" data-reactid=".0.1.$CinemaGoodsInfoView-2791.1"><span data-reactid=".0.1.$CinemaGoodsInfoView-2791.1.0">什么是通兑票 </span><i class="iconfont icon-help-filled" data-reactid=".0.1.$CinemaGoodsInfoView-2791.1.1"></i></div>
    </section>
</div>
</template>

<script>
import axios from 'axios'
import api from '../../common/api.js'

    export default {
        data(){
            return{
                tickets:[]
            }
        },
        created(){
            axios.get(api.host+'/cinema/'+this.$route.params.cinemaId+'/item?__t='+new Date()*1)
            .then((response)=>{
                // console.log(response)
                
                response.data.data.items.map((item,index)=>{
                    
                        this.tickets.push(item)
                    
                })
                // console.log(this.tickets)
            })
            .catch((error)=>{
                console.log(error)
            })

        }
    }
</script>

<style>
.ticketAll span{
    font-size:12px;
}
.ticketAll{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.cinema-goods-info {
  padding: 10px !important;
  position: absolute;
  min-height: 100%;
  width: 94%;
  background: url(//static.m.maizuo.com/v4/static/app/asset/3c4771ba8ce431d164897b8a2d13a05e.png) repeat;
}
.cinema-goods-info .ticket_warp {
  background: url(//static.m.maizuo.com/v4/static/app/asset/b8ba6a7fc17c5729f063255c910e9812.png) no-repeat right 0;
  width: 100%;
  min-width: 300px;
  padding-bottom: 15px;
  height: 123px;
}
.cinema-goods-info .ticket {
  background: url(//static.m.maizuo.com/v4/static/app/asset/d9f7005d18b8bc9e078e67e254f43771.png) no-repeat;
  cursor: pointer;
}
.cinema-goods-info .ticket .ticket_iner {
  background: url(//static.m.maizuo.com/v4/static/app/asset/3b6db1bce548e2e3302beac254b7c761.png) repeat;
  margin: 0 18px;
}
.cinema-goods-info .ticket .ticket-type {
  display: inline-block;
  width: 63%;
  height: 108px;
  background: url(//static.m.maizuo.com/v4/static/app/asset/a653f1c288140e0eaa63583bedce0ef8.png) repeat;
}
.cinema-goods-info .ticket .ticket-price {
  display: inline-block;
  padding-left: 7%;
  height: 108px;
  top: 50px;
  right: 75px;
  text-align: center;
  background: url(//static.m.maizuo.com/v4/static/app/asset/3b7a58f4c8015c7d060dc95fab608b4a.png) no-repeat;
}
.cinema-goods-info .ticket span {
  display: block;
  margin-left: 8px;
}
.cinema-goods-info .ticket .title {
  color: #fff;
  font-size: 16px;
  margin-top: 28px;
}
.cinema-goods-info .ticket .msg {
  color: #fff;
  opacity: 0.5;
  margin-top: 5px;
  font-size:12px;
}
.cinema-goods-info .ticket .now-price {
  color: #e36f0d;
  font-size: 16px;
  margin-top: 28px;
}
.cinema-goods-info .ticket .price {
  text-decoration: line-through;
  color: #c6c6c6;
}
.cinema-goods-info .show_ticket_type {
  display: inline-block;
  color: #b4b4b4;
  cursor: pointer;
}

</style>
