<template>
  <div class='marketArea' v-html='area'>

  </div>
</template>

<script>
import axios from 'axios'
import api from '../../common/api.js'

    export default {
        data(){
            return{
                cityId:10,
                area:[]
            }
        },
        created(){

            axios.get(api.marketBanner+'?cityId='+this.cityId+'&id='+this.$route.params.marketAreaId)
            .then((response)=>{
                console.log(response);
                this.area = response.data.data.data.content;
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style>
.marketArea{
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    overflow:auto;
    z-index:15;
    background:#ebebeb;
}
</style>
