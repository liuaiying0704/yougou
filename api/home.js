import fly from '../utils/request.js'
// 轮播图
export function getBanners() {
  return fly.get('/home/swiperdata')
}
// 导航分类
export function getNavs() {
  return fly.get('/home/catitems')
}


// 导航分类
export function getFloors() {
  return fly.get('/home/floordata')
}
