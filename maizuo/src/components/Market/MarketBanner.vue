<template>
  <div v-html='this.dom' class='banner'></div>
</template>

<script>
 import axios from 'axios'
 import api from '../../common/api.js'

 export default {
     data(){
         return{
             cityId : 10,
             dom:''
         }
     },
     created(){

         axios.get(api.marketBanner + '?cityId='+ this.cityId +'&id='+this.$route.params.marketBannerId)
         .then((response)=>{
            //  console.log(response)
             this.dom = response.data.data.data.content;
            //  console.log(this.dom)
         })
         .catch((error)=>{
             console.log(error)
         })
     }
 }   
</script>


<style>
.banner{
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
