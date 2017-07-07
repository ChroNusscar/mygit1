<template>
    <div class="category">
	<div class="detail"><img :src="this.categoryTitle.image" alt="">
		<p class="name">{{this.categoryTitle.name}}</p>
	</div>
	<div class="recommend">
		<div class="container">
			<div class="items">
				<div class="tailloader">
					<div class="item clearfix even" v-for='good in categoryDetail'>
						<router-link :to="'/Market/MarketGood/'+ good.id">
							<div class="logo"><img :src="good.skuList[0].image">
								<div class="name">{{good.masterName}}</div>
								<div class="content"><span class="price">￥{{(good.skuList[0].price/100).toFixed(2)}}</span><span class="inventory"><!-- react-text: 40 -->已售<!-- /react-text --><!-- react-text: 41 -->2331<!-- /react-text --></span></div>
							</div>
						</router-link>
					</div>
					
					<div style="clear: both;"></div>
				</div>
				<div class="tips">~貌似没有更多了~</div>
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
                page:'1',
                num:'20',
                categoryDetail:[],
                categoryTitle:{}
            }
        },
        created(){

            axios.get('/category?id='+this.$route.params.marketCategoryId)
            .then((response)=>{
                // console.log(response)
                this.categoryTitle = response.data.data;
                // console.log(this.categoryTitle)
            })
            .catch((error)=>{
                console.log(error)
            })


            axios.get('/category/items?id='+this.$route.params.marketCategoryId +'&page='+this.page+'&num='+this.num)
            .then((response)=>{
                // console.log(response)
                this.categoryDetail = response.data.data.list;
                // console.log(this.categoryDetail)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style>
.category{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.category .detail {
	padding: 17px 20px;
	margin-bottom: 3px;
	background: #fff url(/public/asset/05df54d3.png) no-repeat;
	background-size: 100% 100%;
    height: 0.64rem;
}

.category .detail img {
	width: 50px;
	height: 50px;
	float: left
}

.category .detail p {
	font-size: 16px;
	margin-left: 30px;
	width: 70%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block
}

.category .recommend .container .title {
	height: 33px;
	background-color: #f2f2f2;
	line-height: 33px;
	font-size: 13px;
	text-align: center;
	color: #323232;
	margin-bottom: -10px
}

.category .recommend .container .items {
	background-color: #f2f2f2;
	min-height: 510px;
	padding-right: 10px;
	padding-left: 10px
}

.category .recommend .container .items .tips {
	text-align: center;
	font-size: 12px;
	color: #999
}

.category .recommend .container .items .odd {
	padding-left: 2.5px
}

.category .recommend .container .items .even {
	padding-right: 2.5px
}

.category .recommend .container .items .item {
	position: relative;
	float: left;
	width: 49%;
	text-align: center;
	padding-top: 5px
}

.category .recommend .container .items .item .logo {
	display: inline-block;
	width: 100%;
	background: #fff
}

.category .recommend .container .items .item .logo img {
	width: 100%
}

.category .recommend .container .items .item .logo .name {
	font-size: 12px;
	height: 34px;
	color: #323232;
	text-align: left;
	padding-left: 6px
}

.category .recommend .container .items .item .logo .content {
	margin: 0 auto;
	text-align: left;
	padding-bottom: 10px;
    position:static;
    height:0.29rem;
    background:inherit;
}

.category .recommend .container .items .item .logo .content .price {
	font-size: 13px;
	color: #ff5000;
	padding-left: 6px
}

.category .recommend .container .items .item .logo .content .inventory {
	font-size: 9px;
	color: #999;
	margin-left: 15px
}

.category .recommend .container .items .items-loading {
	text-align: center;
	padding: 6px;
	font-size: 10px;
	color: #7d7d7d
}


</style>
