<template>
    <div class='card-query'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">卖座卡</mt-tab-item>
            <mt-tab-item id="2">电子卖座卡</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected" class="material">
            <mt-tab-container-item id="1">
                <div>
                    <label>卡号：</label>
                    <input type="text"  placeholder="请输入卡号">
                    <div class="line"></div>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="text"  placeholder="请输入密码">
                    <div class="line"></div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div>
                    <label>卡号：</label>
                    <input type="text"  placeholder="请输入15位电子卖座卡号">
                    <div class="line"></div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>

        <button class="card_query_bottom center-block">查询</button>
    </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);  

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);

export default {
    data(){
        return{
          selected:'1'  
        }
    }
}
</script>

<style>
button, a {
    outline: none;
}
.card-query {
    font-size: 14px;
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #fcfcfc;
}
.card-query .material {
    padding: 0 32px;
}
.card-query .material div {
    margin-top: 30px;
}
.card-query .material label {
    font-weight: normal;
    line-height: 34px;
    margin: 0 15px 0 10px;
    float: left;
}
label {
    display: inline-block;
    max-width: 100%;
}
.card-query .material input {
    border: none;
    background-color: transparent;
    height: 34px;
    width: 55%;
    font-size: 14px;
    vertical-align: top;
    border: none;
    outline: medium;
}
.card-query .material .line {
    border-width: 0px 1px 1px;
    border-style: solid;
    border-color: #ccc;
    height: 5px;
    margin-top: -5px;
}
.card-query .card_query_bottom {
    width: 160px;
    margin: 25px auto 30px;
    border-radius: 18px;
    background-color: #fe8233;
    height: 36px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    border: none;
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.card-query .material .mint-tab-container-wrap{
    margin-top:0;
}
.card-query .material .mint-tab-container-wrap .mint-tab-container-item{
    margin-top:0;
}
.mint-tab-item-label {
    font-size: 17px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ff7100;
    color: #ff7100;
    margin-bottom: -3px;
}
</style>

