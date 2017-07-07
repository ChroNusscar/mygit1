<template>
    <div class='movie'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">正在热映</mt-tab-item>
            <mt-tab-item id="2">即将上映</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class='change'>
            <mt-tab-container-item id="1" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <mt-cell v-for="playing in nowPlaying" class='nowPlaying-item'>
                    <router-link :to="'/Home/HomeDetail/'+ playing.id">
                    <div class='file-item'>
                        <div class='file-item-img'>
                            <img :src='playing.cover.origin'>
                        </div>
                        <div class='file-item-des'>
                            <div class='line1 line'>
                                <span>{{playing.name}}</span>
                                <span class='point'>
                                    <strong>{{playing.grade}}</strong>
                                    <i class='iconfont icon-insta360logo13'></i>
                                </span>
                            </div>
                            <div class='line2 line'>{{playing.intro}}</div>
                            <div class='line3 line'>
                                <span>{{playing.cinemaCount}}家影院上映</span>
                                <span>{{playing.watchCount}}人购票</span>
                            </div>
                        </div>
                    </div>
                    </router-link>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" v-infinite-scroll="loadMoreSoon" infinite-scroll-disabled="loading2" infinite-scroll-distance="10"> 
                <mt-cell v-for="soon in comingSoon" class='comingSoon-item'>
                    <router-link :to="'/Home/HomeDetail/'+ soon.id">
                    <div class='file-item'>
                        <div class='file-item-img'>
                            <img :src='soon.cover.origin'>
                        </div>
                        <div class='file-item-des'>
                            <div class='line1 line'>
                                <span>{{soon.name}}</span>
                                <span class='point'>
                                    <i class='iconfont icon-insta360logo13'></i>
                                </span>
                            </div>
                            <div class='line2 line'>{{soon.intro}}</div>
                            <div class='line3 line'>
                                <span>{{soon.premiereAt | date}}上映</span>
                                <span>{{soon.premiereAt | day}}</span>
                            </div>
                        </div>
                    </div>
                    </router-link>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import axios from 'axios'
    import Vue from 'vue'

    import api from '../../common/api.js'

    import { Navbar, TabItem } from 'mint-ui';
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import { Cell } from 'mint-ui';

    import { InfiniteScroll } from 'mint-ui';

    Vue.use(InfiniteScroll);

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    Vue.component(Cell.name, Cell);

    export default {
        data(){
            return{
                selected:'1',
                nowPlaying:[],
                comingSoon:[],
                pnPage:1,
                pnCount:5,
                csPage:1,
                csCount:5
            }
        },
        filters : {
            // 计算时间戳
            date : function(value){
				var date = new Date(value);
				return `${date.getMonth()+1}月${date.getDate()}日`
			},
            day : function(value){
                var date = new Date(value);
                let day = date.getDay()
                switch (day){
                        case 0:
                        return "星期日";
                        case 1:
                        return "星期一";
                        case 2:
                        return "星期二";
                        case 3:
                        return "星期三";
                        case 4:
                        return "星期四";
                        case 5:
                        return "星期五";
                        case 6:
                        return "星期六";
                }
            }
        },
        created(){
             // 请求热映
            axios.get(api.moviePlayingNow + '?page='+this.pnPage+'&count='+this.pnCount)
                    .then((response)=>{
                        // console.log(response);
                        this.nowPlaying = response.data.data.films;
                    })
                    .catch((error)=>{
                        console.log(error);
                    }),
            // 请求即将上映
            axios.get(api.movieComingSoon + '?page='+this.csPage+'&count='+this.csCount)
                    .then((response)=>{
                        // console.log(response);
                        this.comingSoon = response.data.data.films;
                    })
                    .catch((error)=>{
                        console.log(error);
                    })

            //提取store的所存跳转
            this.selected = this.$store.state.cinemaSelect;
        },
        methods:{
            loadMore() {
                this.pnPage = ++this.pnPage;
                // console.log(api.moviePlayingNow + '?page='+this.pnPage+'&count='+this.pnCount)
                this.loading = true;
                setTimeout(() => {
                    axios.get(api.moviePlayingNow + '?page='+this.pnPage+'&count='+this.pnCount)
                    .then((response)=>{
                        // console.log(response);
                        response.data.data.films.map((item,index)=>{
                            this.nowPlaying.push(item);
                        })
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                    this.loading = false;
                }, 1000);
            },
            loadMoreSoon() {
                this.csPage = ++this.csPage;
                // console.log(api.moviePlayingNow + '?page='+this.pnPage+'&count='+this.pnCount)
                this.loading2 = true;
                setTimeout(() => {
                    axios.get(api.movieComingSoon + '?page='+this.csPage+'&count='+this.csCount)
                    .then((response)=>{
                        // console.log(response);
                        response.data.data.films.map((item,index)=>{
                            this.comingSoon.push(item);
                        })
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                    this.loading2 = false;
                }, 1000);
            }
        }
    }
</script>
<style>
.movie{
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    background-color: #f9f9f9;
    width: 92%;
    position: absolute;
    min-height: 100%;
}
.mint-navbar {
    background-color: #f9f9f9;
}
.mint-cell-wrapper{
    display:block;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 0.06rem solid #fe6e00;
    color: #fe6e00;
    margin-bottom: -0.03rem;
}
.mint-tab-item-label {
    color: inherit;
    font-size: 0.16rem;
    line-height: 1;
}
.mint-cell {
    background-color: #f9f9f9;
}
/*热映*/
.change .mint-cell-title{
    width:0;
    flex:0;
}
.nowPlaying-item .file-item{
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.nowPlaying-item .file-item .file-item-img{
    width: 0.60rem;
    float: left;
    overflow: hidden;
}
.nowPlaying-item .file-item .file-item-img img{
    width:0.6rem;
    height:0.82rem;
}
.nowPlaying-item .file-item .file-item-des{
    display:flex;
    flex-direction: column;
    /*justify-content: space-around;*/
}
.nowPlaying-item .file-item .file-item-des{
    height:0.82rem;
    padding-left: 0.15rem;
}
.nowPlaying-item .file-item .file-item-des .line{
    flex:1;
}
.nowPlaying-item .file-item .file-item-des .line1{
    display:flex;
    justify-content: space-between;
    width: 2.5rem;
}
.nowPlaying-item .file-item .file-item-des .line1 span:nth-child(1){
    font-size: 0.16rem;
    line-height: 0.32rem;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nowPlaying-item .file-item .file-item-des .line1 span:nth-child(2){
    float: right;
    font-size: 0.16rem;
    line-height: 0.32rem;
}
.nowPlaying-item .file-item .file-item-des .line1 span:nth-child(2) strong{
    color: #fc7103;
}
.nowPlaying-item .file-item .file-item-des .line1 span:nth-child(2) i{
    display:inline-block;
    transform: rotate(-90deg);
}
.nowPlaying-item .file-item .file-item-des .line2{
    height: 0.24rem;
    line-height: 0.24rem;
    color: #8e8e8e;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.nowPlaying-item .file-item .file-item-des .line3{
    line-height: 0.24rem;
    color: #8e8e8e;
    font-size: 0.12rem;
}

/*即将上映*/
.change .mint-cell-title{
    width:0;
    flex:0;
}
.comingSoon-item .file-item{
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.comingSoon-item .file-item .file-item-img{
    width: 0.60rem;
    float: left;
    overflow: hidden;
}
.comingSoon-item .file-item .file-item-img img{
    width:0.6rem;
    height:0.82rem;
}
.comingSoon-item .file-item .file-item-des{
    display:flex;
    flex-direction: column;
    /*justify-content: space-around;*/
}
.comingSoon-item .file-item .file-item-des{
    height:0.82rem;
    padding-left: 0.15rem;
}
.comingSoon-item .file-item .file-item-des .line{
    flex:1;
}
.comingSoon-item .file-item .file-item-des .line1{
    display:flex;
    justify-content: space-between;
    width: 2.5rem;
}
.comingSoon-item .file-item .file-item-des .line1 span:nth-child(1){
    font-size: 0.16rem;
    line-height: 0.32rem;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.comingSoon-item .file-item .file-item-des .line1 span:nth-child(2){
    float: right;
    font-size: 0.16rem;
    line-height: 0.32rem;
}
.comingSoon-item .file-item .file-item-des .line1 span:nth-child(2) strong{
    color: #fc7103;
}
.comingSoon-item .file-item .file-item-des .line1 span:nth-child(2) i{
    display:inline-block;
    transform: rotate(-90deg);
}
.comingSoon-item .file-item .file-item-des .line2{
    height: 0.24rem;
    line-height: 0.24rem;
    color: #8e8e8e;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.comingSoon-item .file-item .file-item-des .line3{
    line-height: 0.24rem;
    color: #ffb375;
    font-size: 0.12rem;
}
</style>

