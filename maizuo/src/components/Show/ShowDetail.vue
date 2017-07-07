<template>
  <div class='showDetail'>
        <div class='header-wrap with-navbar clear-mb'>
            <div class='step-wrap'>
                <i class="step step-1 active">
                    <span>详情</span>
                </i>
                <i class="step">
                    <span>下单</span>
                </i>
                <i class="step step-3">
                    <span>支付</span>
                </i>
            </div>
        </div>
        <div>
            <div class="application-main">
                <article class="schedule-detail-view">
                    <div class="info">
                        <img :src="this.showData.skuList[0].images[1]" alt="">
                        <div class="info-right">
                            <p class="info-name">{{this.showData.masterName}}</p>
                            <p class="info-time">{{this.showData.options[0].item[0]}}</p>
                            <p class="info-address">{{this.showData.slaveName}}</p>
                            <div class="info-operation">
                                <p class="price-range">280 - 1080 元</p>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <p class="title">演出详情</p>
                        <div v-html='des' class='des-add'></div>
                    </div>
                    <div class="primary-button">下一步</div>
                </article>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
        data(){
            return{
                showData : {
                    masterName:'',
                    date:'',
                    address:'',
                    price:'',
                    skuList:[
                        {
                            images:['']
                        }
                    ],
                    options:[
                        {
                            item:['']
                        }
                    ]
                },
                des : ''
            }
        },
        created(){
            axios.get('/schedule/' + this.$route.params.showId + '?__t='+ new Date()*1)
            .then((response)=>{
                // console.log(response)
                this.showData = response.data.data;
                // console.log(this.showData)
                // this.showDatashowData = showData.masterName;
                // this.date = showData
            })
            .catch((error)=>{
                console.log(error)
            }),
            axios.get('/schedule/'+ this.$route.params.showId+'/description?__t='+ new Date()*1)
            .then((response)=>{
                // console.log(response);
                this.des = response.data.data.desc;
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        
    }
</script>

<style>
.showDetail{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.header-wrap {
    height: 48px;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
}
.header-wrap .step-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    overflow: visible;
    margin: 0 auto;
    width: 200px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.header-wrap .step.step-1 {
    text-align: left;
    margin-right: 4px;
}
.header-wrap .step.active {
    color: #ff5000;
}

.header-wrap .step {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-style: normal;
    font-size: 14px;
    min-width: 33%;
    width: 60px;
    display: inline-block;
}
.header-wrap .step {
    font-size: 17px;
}
.header-wrap .step.step-3 {
    margin-left: 4px;
    text-align: right;
}
.application-main {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-bottom: 50px;
}
.schedule-detail-view .info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.schedule-detail-view .info{
    padding: 8px 10px 15px 10px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 80px;
    overflow-x: hidden;
}
.schedule-detail-view .info img {
    height: 139px;
}
.schedule-detail-view .info img {
    width: 96px;
}
.schedule-detail-view .info .info-right {
    margin-left: 10px;
    padding-top: 2px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.schedule-detail-view .info .info-name {
    min-height: 48px;
}
.schedule-detail-view .info .info-name {
    margin-bottom: 10px;
}
.schedule-detail-view .info .info-name {
    font-size: 17px;
}
.schedule-detail-view .info .info-name {
    line-height: 1.4em;
    color: rgba(0, 0, 0, 0.87);
}
.schedule-detail-view .info .info-time{
    font-size: 12px;
    margin-top: 5px;
    min-height: 14px;
    color: rgba(0, 0, 0, 0.54);
}
.schedule-detail-view .info .info-address {
    font-size: 12px;
    margin-top: 5px;
    min-height: 14px;
    color: rgba(0, 0, 0, 0.54);
}
.schedule-detail-view .info .info-operation {
    margin-top: 12px;
    display: flex;
    color: #ff5000;
}
.schedule-detail-view .info .info-operation .price-range {
    font-size: 19px;
    padding-top: 7px;
}
.schedule-detail-view .desc {
    margin-top: 10px;
}
.schedule-detail-view .info, .schedule-detail-view .coupon, .schedule-detail-view .desc {
    padding: 8px 10px 15px 10px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 80px;
    overflow-x: hidden;
}
.schedule-detail-view .desc .title {
    font-size: 17px;
    margin: 6px 0;
    padding-bottom: 6px;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
}
.primary-button {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 500;
    line-height: 50px;
    background-color: #ff5000;
    text-align: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: #fff;
    font-size: 16px;
}
.primary-button {
    font-size: 19px;
}
.des-add img{
    width:3.55rem !important;
}
</style>

