import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    titleName: '卖座电影',
    cinemaSelect : '1'
  },
  mutations: {
    increment (state,payload) {
      // console.log(payload)
      state.titleName = payload;
    },
    selected (state,payload) {
      // console.log(payload)
      state.cinemaSelect = payload;
      // console.log(state.cinemaSelect)
    }
  }
})

export default store