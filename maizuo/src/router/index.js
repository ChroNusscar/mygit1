import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie/Movie'
import Cinema from '@/components/Cinema/Cinema'
import Market from '@/components/Market/Market'
import Show from '@/components/Show/Show'
import Mine from '@/components/Mine/Mine'
import SiteCard from '@/components/SiteCard/SiteCard'
import HomeDetail from '@/components/Home/HomeDetail'
import City from '@/components/city/city'
import HomeDetailBuy from '@/components/Home/HomeDetailBuy'
import CinemaDetail from '@/components/Cinema/CinemaDetail'
import ShowDetail from '@/components/Show/ShowDetail'
import MarketCategory from '@/components/Market/MarketCategory'
import MarketBanner from '@/components/Market/MarketBanner'
import MarketInput from '@/components/Market/MarketInput'
import MarketArea from '@/components/Market/MarketArea'
import MarketGood from '@/components/Market/MarketGood'
import Ticket from '@/components/Cinema/CinemaTicket'
import Good from '@/components/Cinema/CinemaGood'
import Site from '@/components/Cinema/CinemaSite'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'HomeDetail/:id',
          name:'HomeDetail',
          component: HomeDetail,
          children:[
            {
              path:'HomeDetailBuy',
              name:'HomeDetailBuy',
              component:HomeDetailBuy
            }
          ]
        }
      ]
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Cinema',
      name: 'Cinema',
      component: Cinema,
      children:[
        {
          path:'CinemaDetail/:cinemaId',
          name:'CinemaDetail',
          component:CinemaDetail,
          children:[
            {
              path:'site',
              name:'site',
              component:Site
            },
            {
              path:'ticket',
              name:'ticket',
              component:Ticket
            },
            {
              path:'good',
              name:'good',
              component:Good
            }
          ]
        }
      ]
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market,
      children:[
        {
          path:'MarketCategory/:marketCategoryId',
          name:'MarketCategory',
          component:MarketCategory
        },
        {
          path:'MarketBanner/:marketBannerId',
          name:'MarketBanner',
          component:MarketBanner
        },
        {
          path:'MarketInput/:marketInputId',
          name:'MarketInput',
          component:MarketInput
        },
        {
          path:'MarketArea/:marketAreaId',
          name:'MarketArea',
          component:MarketArea
        },
        {
          path:'MarketGood/:marketGoodId',
          name:'MarketGood',
          component:MarketGood
        }
      ]
    },
    {
      path: '/Show',
      name: 'Show',
      component: Show,
      children:[
        {
          path:'ShowDetail/:showId',
          name:'ShowDetail',
          component:ShowDetail
        }
      ]
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/SiteCard',
      name: 'SiteCard',
      component: SiteCard
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
