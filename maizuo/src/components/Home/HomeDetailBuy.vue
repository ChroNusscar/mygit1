<template>
    <div class="cinema-view">
        <div class='district active' v-for='(area,index) in areaData'>
            <div class="area-title" @click='open(index)'>
                <span>{{area}}</span>
            </div>
            <div class='area-content'>
                <div class="cinema-wrap" v-for='(cinema,i) in cinemaData[index]' @click='changeTitle(index,i)'>
                    <router-link :to='"/Cinema/CinemaDetail/"+cinema.id'>
                    <div class="cinema clearfix">
                        <div class="cinema-title">
                            <div class="cinema-title-cinemaname">
                                <i>{{cinema.name}}</i>
                                <i class='book'>座</i>
                                <i class='ticket'>酒</i>
                            </div>
                            <span class="cinema-title-tip">
                                <i class="tip_01">可乐爆米花</i>
                            </span>
                            <span class="cinema-title-address">
                                <span>{{cinema.address}}</span>
                            </span>
                            <div class="cinema-title-location">
                                <span>距离</span>
                                <span>未知</span> |
                                <span>剩余{{cinema.avaliableSchedule}}场</span>
                            </div>
                        </div>
                        <span class="pull-right nav cinema-title-price">
                            ￥{{cinema.minimumPrice}}
                        </span>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api from '../../common/api.js'

    export default {
        data(){
            return{
                areaData : ['宝安区','龙华新区','罗湖区','南山区','福田区','龙岗区','光明新区','坪山新区','盐田区'],
                cinemaData:[
                    {
                        id:'',
                        name:'',
                        address:'',
                        avaliableSchedule:'',
                        minimumPrice:''
                    }
                ]
            }
        },
        created(){
            // console.log(api.host + '/film/'+this.$route.params.id+'/cinema?__t='+new Date()*1)
            axios.get(api.host + '/film/'+this.$route.params.id+'/cinema?__t='+new Date()*1)
            .then((response)=>{
                // console.log(response)
                this.cinemaData = response.data.data.cinemas;
                let cinemaArray = response.data.data.cinemas;
                // console.log(this.cinemaData)
                let cinemaCategory = [];

                for(let i = 0;i < this.areaData.length;i++){
                    let areaCinema = [];
                    for(let j = 0;j < cinemaArray.length;j++){
                        if(cinemaArray[j].district.name == this.areaData[i]){
                            areaCinema.push(cinemaArray[j])
                        }
                    }
                    cinemaCategory.push(areaCinema);
                }
                this.cinemaData = cinemaCategory;
                // console.log(this.cinemaData)
                
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        methods : {
            open : function(index){
                // console.log(index)
                let openArea = document.getElementsByClassName('area-content')[index];
                // console.log(openArea);
                if(openArea.style.display == 'none'){
                    // console.log(1)
                    openArea.style.display = 'block';
                }else{
                    openArea.style.display = 'none';
                }
                
            },
            changeTitle(index,i){
            // console.log(1)
                this.$store.commit('increment',this.cinemaData[index][i].name)
            }
        }
    }
</script>

<style>
.cinema-view{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
.district .area-title {
    height: 0.40rem;
    line-height: 0.40rem;
    font-size: 0.14rem;
    padding-left: 0.16rem;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}
.district .area-content {
    width: 100%;
    display:none;
}
.district .area-content .cinema-wrap {
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    min-width: 3.20rem;
    height:1.20rem;
    background:white;
}
.district .area-content .cinema-wrap .cinema {
    border-radius: 5px;
    padding: 0.10rem 0 0.12rem 0.16rem;
    cursor: pointer;
}
.district .area-content .cinema-wrap .cinema .cinema-title {
    width: 75%;
    min-width: 2.30rem;
    float: left;
    cursor: pointer;
    overflow: hidden;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-cinemaname {
    display: inline-block;
    font-size: 0.16rem;
    width: 100%;
    margin-bottom: 0.05rem;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-cinemaname i:first-child {
    color:#555;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: text-top;
    max-width: 80%;
    font-style: normal;
    margin-right: 0.03rem;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-cinemaname .book {
    color: #fc8558;
    font-size: 0.10rem;
    margin-right: 0.03rem;
    font-style: normal;
    border:1px solid #fc8558;
    border-radius:100%;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-cinemaname .ticket {
    color: #88aec8;
    font-size: 0.10rem;
    font-style: normal;
    margin-right: 0.03rem;
    border:1px solid #88aec8;
    border-radius:100%;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-tip {
    display: inline-block;
    margin-bottom: 0.05rem;
    font-size: 0.10rem;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-tip i {
    display: inline-block;
    border-radius: 3px;
    padding: 0 0.05rem;
    margin: 0 0.05rem;
    font-style: normal;
    color: #fff;
    height: 0.15rem;
    line-height: 0.15rem;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-tip .tip_01 {
    background-color: #51add0;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-address {
    display: inline-block;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #ccc;
}
.district .area-content .cinema-wrap .cinema .cinema-title .cinema-title-location {
    font-size: 0.12rem;
    color: #ccc;
}
.district .area-content .cinema-wrap .cinema .nav {
    padding-right: 0.15rem;
    line-height: 0.36rem;
    font-size: 16px;
    color: #fc8637;
}
.pull-right {
    float: right !important;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.district .area-content .cinema-wrap .cinema .nav i{
    transform: rotate(-90deg);
}

</style>
