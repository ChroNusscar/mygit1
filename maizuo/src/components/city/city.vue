<template>
    <div class='city-view'>
        <div class='gprs-city'>
            <div class='city-index-title'>GPS定位你所在城市</div>
            <div class='city-index-detail'>
                <ul class="list-unstyled"> 
                    <li class="city-item-detail city-item-detail-gprs">深圳</li>
                </ul>
            </div>
        </div>
        <div class='hot-city'>
            <div class="city-index-title">热门城市</div>
            <div class="city-index-detail">
                <ul class="list-unstyled">
                    <li class="city-item-detail">北京</li>
                    <li class="city-item-detail">上海</li>
                    <li class="city-item-detail">广州</li>
                    <li class="city-item-detail">深圳</li>
                </ul>
            </div>
        </div>
        <div class='index-city'>
            <div>
                <div class="city-index-title">按字母排序</div>
                <div class="city-index-detail">
                    <ul class="list-unstyled">
                        <li class="city-item-detail" v-for='word in words'>{{word}}</li>
                    </ul>
                </div>
            </div>
            <div class="index-city-list">
                <div v-for='(word,index) in words'>
                    <div class="city-index-title">{{word}}</div>
                    <div class="city-index-detail">
                        <ul class='list-unstyled'>
                            <li class="city-item-detail" v-for='letter in data[index]'>{{letter.name}}</li>
                        </ul>
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
            words:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
            data:[]
        }
    },
    created(){
        axios.get('/api/city?__t=' + new Date()*1)
        .then((response)=>{
            // console.log(response.data.data.cities)
            let data1 = response.data.data.cities;
            // console.log(data1)
            let arrData = [];
            for(let i = 0;i < this.words.length;i++){
                let arr = [];
                for(let j = 0;j < data1.length;j++){
                    // console.log(data1[j].pinyin)
                    // console.log(j)
                    let word = data1[j].pinyin.indexOf(this.words[i]);
                    if(word == 0){
                        arr.push(data1[j])
                    }
                }
                arrData.push(arr);
            }
            // console.log(arrData)
            this.data = arrData;
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
</script>

<style>
.city-view{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#fff;
}
.city-view .city-index-title {
    padding-left: 0.15rem;
    font-size: 0.14rem;
    line-height: 0.40rem;
    background-color: #ebebeb;
    margin-top: -0.01rem;
}
.city-view .city-index-detail {
    background-color: #fff;
}
.city-view .city-index-detail ul {
    margin: 0;
    min-width: 3.20rem;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.city-view .city-index-detail .city-item-detail {
    width: 24%;
    font-size: 0.16rem;
    line-height: 0.46rem;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #838383;
    border-bottom: #ebebeb 1px solid;
}
.city-view .city-index-detail .city-item-detail-gprs {
    color: #e2941a;
}
.city-view .city-index-detail {
    background-color: #fff;
}
</style>
