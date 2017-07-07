<template>
        <div class='film-view'>
            <div class='film-img'>
                <img :src='this.data.cover.origin' alt="">
            </div>
            <div class='film-intro'>
                <div class='film-word1'>影评简介</div>
                <div class='film-word2'>
                    <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                    <span>{{this.data.director}}</span>
                </div>
                <div class='film-word2'>
                    <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                    <span v-for='actor in this.data.actors'>{{actor.name}}|</span>
                </div>
                <div class='film-word2'>
                    <span>地区语言：</span>
                    <span>{{this.data.nation}}({{this.data.language}})</span>
                </div>
                <div class='film-word2'>
                    <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
                    <span>{{this.data.category}}</span>
                </div>
                <div class='film-word2'>
                    <span>上映日期&nbsp;:</span>
                    <span>{{this.data.premiereAt | date}}上映</span>
                </div>
                <div class='film-word3'>{{this.data.synopsis}}</div>
            </div>
            <div class='operation'>
                <router-link :to="'/Home/HomeDetail/'+this.data.id+'/HomeDetailBuy'"><button class='buy'>立即购票</button></router-link>
            </div>
            <router-view></router-view>
        </div>
</template>

<script>
import router from 'vue-router'
import axios from 'axios'

export default {
    data(){
        return{
            id:this.$route.params.id,
            data:{
                cover : {
                    origin : ''
                }
            }
        } 
    },
    created(){
        //请求影片详情
        // console.log(this.$route.params.id)
        // console.log('/api/film/'+this.id+'?__t='+new Date()*1)
        axios.get('/api/film/'+this.id+'?__t='+new Date()*1)
        .then((response)=>{
            // console.log(response)
            this.data = response.data.data.film;
            // console.log(this.data.name)
            this.$store.commit('increment', this.data.name)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    filters : {
        date : function(value){
				var date = new Date(value);
				return `${date.getMonth()+1}月${date.getDate()}日`
			}
    }
}   
</script>

<style>
.film-view{
    width:100%;
    position:absolute;
    top:0;
    background:#e1e1e1;
    left:0;
    z-index:15;
    bottom:0;
    overflow:auto;
}
.film-img img{
    width:3.75rem;
    height:2.11rem;
}
.film-intro .film-word1{
    margin: 0.16rem auto;
    border-left: 0.16rem solid RGB(228, 200, 156);
    font-size: 0.16rem;
    padding-left: 0.04rem;
}
.film-intro .film-word2{
    font-size:0.12rem;
    height: 0.18rem;
    overflow: hidden;
    margin-bottom: 0.10rem;
    padding-left: 0.20rem;
}
.film-intro .film-word3{
    font-size:0.12rem;
    text-overflow: ellipsis;
    margin-bottom: 0.80rem;
    padding-left: 0.20rem;
    padding-right: 0.20rem;
}

.operation{
    position: fixed;
    left: 0;
    bottom: 0.20rem;
    width: 100%;
    text-align: center;
}

.operation button{
    font-size: 0.14rem;
    min-width: 1.56rem;
    height: 0.36rem;
    line-height: 0.36rem;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 0.18rem;
    color: #fff;
}
</style>
