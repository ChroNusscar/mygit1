<template>
  <div class='marketinput'>
      <div class="activity">
	<div class="detail"><img src="" alt=""></div>
	<div class="recommend">
		<div class="container">
			<div class="items">
				<div class="tailloader">
					<div class="item clearfix even" v-for='input in inputData'>
						<a href="#!/item/92">
							<div class="logo"><img :src="input.image">
								<div class="name">{{input.name}}</div>
								<div class="content"><span class="price">￥{{(input.price/100).toFixed(2)}}</span><span class="inventory"><!-- react-text: 39 -->已售<!-- /react-text --><!-- react-text: 40 -->{{input.salesCount}}<!-- /react-text --></span></div>
							</div>
						</a>
					</div>
					<div style="clear: both;"></div>
				</div>
				<div class="items-loading">~貌似没有更多了~</div>
			</div>
		</div>
	</div>
</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            page:1,
            size:20,
            inputData : []
        }
    },
    created(){

        axios.get('/active?id='+this.$route.params.marketInputId+'&page='+this.page+'&pageSize='+this.size)
        .then((response)=>{
            // console.log(response)
            this.inputData = response.data.data.products;
            // console.log(this.inputData)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
</script>

<style>
.marketinput{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}

.activity .detail img {
	width: 100%
}

.activity .detail p {
	font-size: 16px;
	margin-left: 30px;
	width: 70%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block
}

.activity .recommend .container .title {
	height: 33px;
	background-color: #f2f2f2;
	line-height: 33px;
	font-size: 13px;
	text-align: center;
	color: #323232;
	margin-bottom: -10px
}

.activity .recommend .container .items {
	background-color: #f2f2f2;
	min-height: 510px;
	padding-right: 10px;
	padding-left: 10px
}

.activity .recommend .container .items .tips {
	text-align: center;
	font-size: 12px;
	color: #999
}

.activity .recommend .container .items .odd {
	padding-left: 2.5px
}

.activity .recommend .container .items .even {
	padding-right: 2.5px
}

.activity .recommend .container .items .item {
	position: relative;
	float: left;
	width: 49%;
	text-align: center;
	padding-top: 5px
}

.activity .recommend .container .items .item .logo {
	display: inline-block;
	width: 100%;
	background: #fff
}

.activity .recommend .container .items .item .logo img {
	width: 100%
}

.activity .recommend .container .items .item .logo .name {
	font-size: 12px;
	height: 32px;
	color: #323232;
	margin: 0 auto;
	text-align: left;
	padding-left: 6px
}

.activity .recommend .container .items .item .logo .content {
	margin: 0 auto;
	text-align: left;
	padding-bottom: 10px;
    position:static;
    height:0.29rem;
    background:inherit;
}

.activity .recommend .container .items .item .logo .content .price {
	font-size: 13px;
	color: #ff5000;
	padding-left: 6px
}

.activity .recommend .container .items .item .logo .content .inventory {
	font-size: 9px;
	color: #999;
	margin-left: 15px
}

.activity .recommend .container .items .items-loading {
	text-align: center;
	padding: 6px;
	font-size: 10px;
	color: #7d7d7d
}





</style>

