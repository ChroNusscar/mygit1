const host = '/api';

// 请求轮播图
const banner = '/billboard/home?__t='+ new Date()*1;

//请求热映数据
const playingNow = '/film/now-playing?__t='+ new Date()*1;

//请求即将上映
const comingSoon = '/film/coming-soon?__t='+ new Date()*1;

//请求影片模块中的热映数据
const moviePlayingNow = '/film/now-playing';


//请求影片模块中的即将上映数据
const movieComingSoon = '/film/coming-soon';

//请求影院数据
const cinema = '/cinema?__t=' + new Date()*1;

//请求演出数据
const show = '/schedule?__t=' + new Date()*1;

//请求商城banner详情
const marketBanner = '/act/active/api/active-detail'

export default {
    host:host,
    banner : host+banner,
    playingNow : host+playingNow,
    comingSoon : host+comingSoon,
    moviePlayingNow : host+moviePlayingNow,
    movieComingSoon : host+movieComingSoon,
    cinema : host + cinema,
    show : show,
    marketBanner : marketBanner
}