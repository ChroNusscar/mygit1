<template>
  <div id="app">
    <div class='bg' @click='sideHide()' v-bind:class='{show:this.isSelected}'></div>
    <header>
      <h1 @click='side()'>
        <i class='iconfont icon-fenlei'></i>
        <span>{{this.$store.state.titleName}}</span>
      </h1>
      <div class='nav-right'>
        <router-link to='/city'>
          <div class='city'>
                <span>深圳</span>
                <i class='iconfont icon-insta360logo13'></i>
          </div>
        </router-link> 
          <div class='user'>
            <i class='iconfont icon-ren'></i>
          </div>
      </div>
    </header>
    <div class='content'>
      <transition name="slide-fade">
          <div class='aside' v-if="isSelected">
            <ul  @click='side()'>
              <li v-for='(tab,index) in tabs' @click='changeTitle(index)'>
              <router-link :to='tab.path'>{{tab.name}}
                  <i class='iconfont icon-arrow'></i>
              </router-link>
              </li>
            </ul>
          </div>
      </transition>

      
      <router-view></router-view>

      <div class="cpn-back-to-top cpn-back-to-top-hide">
          <div class="circle" @click='back()'>
              <i class='iconfont icon-arrow-top'></i> 
          </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
// require('../static/iconfont.css')
export default {
  name: 'app',
  data(){
    return{
      tabs:[
        {name:'首页',path:'/Home',title:'卖座电影'},
        {name:'影片',path:'/Movie',title:'卖座电影'},
        {name:'影院',path:'/Cinema',title:'全部影院'},
        {name:'商城',path:'/Market',title:'卖座商城'},
        {name:'演出',path:'/Show',title:'卖座HOPPA演出'},
        {name:'我的',path:'/Mine',title:'登录'},
        {name:'卖座卡',path:'/SiteCard',title:'查询/绑定/激活卖座卡' }
      ],
      isSelected : false
    }
  },
  methods:{
    side(){ 
        this.isSelected = !this.isSelected;
    },
    sideHide(){
        this.isSelected = !this.isSelected;
        // console.log(1);
    },
    changeTitle(index){
      // console.log(1)
        this.$store.commit('increment',this.tabs[index].title)
    },
    back(){
        // window.onscroll = function() {
            // console.log(1)
            // let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            // console.log(scrollTop);
            // console.log(scrollTop)
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            // console.log(scrollTop)
        // }
    }
  },
  mounted(){

      window.onscroll = function() {
          var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          // console.log(scrollTop);

          if(scrollTop >= 100){
              // console.log(scrollTop)
              // console.log(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class"))
              if(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")){
                  let classOld = document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")
              document.getElementsByClassName('cpn-back-to-top')[0].setAttribute("class",'cpn-back-to-top');
              }
              
              
          }else{
              // console.log("xia"+scrollTop)
              // console.log(document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class"))
              if(document.getElementsByClassName('cpn-back-to-top')[0]){
                  let classOld = document.getElementsByClassName('cpn-back-to-top')[0].getAttribute("class")
              document.getElementsByClassName('cpn-back-to-top')[0].setAttribute("class",'cpn-back-to-top cpn-back-to-top-hide')
              }
              
          }
      }
  }
}
</script>

<style>
@media only screen and (max-width: 320px) {
	html {
		font-size: 85.3px;
	}
}

@media only screen and (min-width: 321px) and (max-width: 360px) {
	html {
		font-size: 96px;
	}
}

@media only screen and (min-width: 361px) and (max-width: 375px) {
	html {
		font-size: 100px;
	}
}

@media only screen and (min-width: 376px) and (max-width: 400px) {
	html {
		font-size: 106.7px;
	}
}

@media only screen and (min-width: 401px) and (max-width: 414px) {
	html {
		font-size: 110.4px;
	}
}

@media only screen and (min-width: 415px) and (max-width: 640px) {
	html {
		font-size: 110.4px;
	}
}

@media only screen and (min-width: 640px) {
	html {
		font-size: 170.7px;
	}
}

a{
  text-decoration: none;
}


body {
	font-size: 16px;
}
*{
  margin:0;
  padding:0;
}
h1{
    margin-top: 14px !important;
}

html,body,#app{
  width:100%;
  height:100%;
}
ul,li,ol{
  list-style:none;
}

/*头部*/
header{
  width:100%;
  height:0.5rem;
  background:#282828;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content: space-between;
  align-items: center;
  z-index:16;
}
header h1{
  float:left;
  width:1.32rem;
  height:100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
header h1 i{
  font-size:0.17rem;
  color:#999;
}
header h1 span{
  font-size:0.14rem;
  color: #efefef;
  height:100%;
  width:0.84rem;
  display:block;
  line-height:0.5rem;
  text-align: center;
  overflow:hidden;
}
header .nav-right{
  width:1.04rem;
  height:100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  color:#999;
}
header .nav-right .city{
  color:#999;
}

.content{
  width:100%;
  height:6.17rem;
  position:absolute;
  top:0.5rem;
  left:0;
  background-color: #f9f9f9;
}

.bg{
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  display:none;
  z-index:50;
}

.aside{
  width:2.65rem;
  height:100%;
  background:#282828;
  position:fixed;
  top:0.50rem;
  /*left:-2.65rem;*/
  z-index:51;
}

.content .aside ul a{
    display: block;
    width: 88%;
    padding: 0 0.16rem;
    border-bottom: 1px dotted #333;
    height:0.51rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#999;
    font-size:0.14rem;
}
.content .aside ul a i{
    transform: rotate(-90deg);
}

/*侧边栏*/
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-2.65rem);
  opacity: 1;
}





/*消失出现*/
.show{
  display:block;
}
.hide{
  display:none;
}


/*回到顶部*/
.cpn-back-to-top {
    transition: 800ms all ease;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 10px;
    z-index: 400;
}
.cpn-back-to-top .circle {
    background-color: rgba(0,0,0,0.7);
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}
.cpn-back-to-top i {
    font-size: 28px;
}

.cpn-back-to-top-hide {
    transform: translateY(68px);
}

</style>
