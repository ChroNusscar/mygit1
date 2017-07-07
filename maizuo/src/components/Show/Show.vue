<template>
<div>
    <div class='show'>
        <section class="application-main">
            <article>
                <div class="tailloader">
                    <div class="schedule-list-view">
                        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                            <li class="schedule-item" :class="{'first-child':!index}" v-for="(item,index) in postData">
                                <router-link :to="'/Show/ShowDetail/'+item.id">
                                <div class="image-wrap"><img :src="item.skuList[0].image" alt=""></div>
                                <p>{{item.masterName}}</p>
                                <div class="coupon">
                                    <div class="coupon-home first-child">
                                        ¥ 20
                                        <span class="limit">适用于480票面</span>
                                    </div>
                                    <div class="coupon-home">
                                        ¥ 30
                                        <span class="limit">适用于680票面</span>
                                    </div>
                                    <div class="coupon-home">
                                        ¥ 40
                                        <span class="limit">适用于880票面</span>
                                    </div>
                                </div>
                                </router-link>
                            </li>
                            <!--<li class="schedule-item">
                                <div class="image-wrap"><img src="" alt=""></div>
                                <p>【深圳】古巨基“我们”世界巡回演唱会-Part 2</p>
                                <div class="coupon">
                                    <div class="coupon-home first-child">
                                        ¥ 20
                                        <span class="limit">适用于480票面</span>
                                    </div>
                                    <div class="coupon-home">
                                        ¥ 30
                                        <span class="limit">适用于680票面</span>
                                    </div>
                                    <div class="coupon-home">
                                        ¥ 40
                                        <span class="limit">适用于880票面</span>
                                    </div>
                                </div>
                            </li>-->
                        </ul>
                        <p class="tip"></p>
                    </div>
                </div>
            </article>
        </section>
        
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
import api from '../../common/api.js'
export default {
    data(){
        return{
            pageSize:6,
            pageNumber:1,
            postData:[]
        }
    },
    created(){
        axios.get(api.show + '&pageSize='+this.pageSize+'&pageNumber='+this.pageNumber+'&sortKey=sortSalesCount&sortType=desc&isMultiSku=1')
        .then((response)=>{
            // console.log(response)
            this.postData = response.data.data.list;
            // console.log(this.postData)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    methods:{
        loadMore() {
            this.pageNumber = ++this.pageNumber;
            // console.log(api.moviePlayingNow + '?page='+this.pnPage+'&count='+this.pnCount)
            this.loading = true;
            setTimeout(() => {
                axios.get(api.show + '&pageSize='+this.pageSize+'&pageNumber='+this.pageNumber+'&sortKey=sortSalesCount&sortType=desc&isMultiSku=1')
                .then((response)=>{
                    // console.log(response);
                    if(response.data.data){
                        response.data.data.list.map((item,index)=>{
                        this.postData.push(item);
                        })
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
                this.loading = false;
            }, 1000);
        }
    }
}  
</script>

<style>
.show{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;  
}
.application-main {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-bottom: 0.50rem;
}
.schedule-list-view {
    width: 100%;
    margin: 0 auto;
}
.schedule-list-view ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.schedule-list-view ul .schedule-item.first-child {
    margin-top: 0;
}
.schedule-list-view ul .schedule-item {
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 0.05rem;
    box-sizing: border-box;
    padding: 0.10rem 0.10rem 0.15rem 0.10rem;
    min-height: 2.00rem;
    overflow-x: hidden;
}
.image-wrap {
    background-color: #ebebeb;
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.02rem;
}
.schedule-list-view ul .schedule-item img {
    width: 100%;
}
.schedule-list-view ul .schedule-item p{
    font-size: 0.17rem;
    color:black;
}
.schedule-list-view .coupon {
    max-height: 0.4rem;
}
.schedule-list-view .coupon {
    margin-top: 0.10rem;
    max-height: 0.4rem;
    white-space: nowrap;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
}
.schedule-list-view .coupon-home.first-child, .schedule-list-view .coupon-home-empty.first-child {
    margin-left: 0;
}
.schedule-list-view .coupon-home, .schedule-list-view .coupon-home-empty {
    font-size: 0.12rem;
    padding: 0.04rem;
    color: #ff5000;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 0.97rem;
    box-sizing: border-box;
    max-height: 0.4rem;
    display: inline-block;
    margin: 0 0 0 0.10rem;
    padding-top:0;
}
.coupon-home {
    background-image: url(//static.maizuo.com/ticket/h5/v1/static/asset/08e233f59b4d9109827be72fd542b291.svg);
}
.schedule-list-view .coupon-home .limit,.schedule-list-view .coupon-home-empty .limit {
    width: 0.89rem;
    font-size: 0.08rem;
    color: rgba(0, 0, 0, 0.4);
}
.schedule-list-view .tip {
    font-size: 0.14rem;
}
.schedule-list-view .tip {
    font-size: 0.12rem;
    margin: 0.20rem auto 0;
    color: rgba(150, 144, 144, 0.4);
    text-align: center;
}
.schedule-list-view .coupon-home{
    width:1rem;
    height:0.47rem;
    display:flex;
    flex-direction: column;
}
</style>
