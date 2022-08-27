// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import elUpload from "./utils/elUpload.js";
// console.log(ElementUI.Upload,'ElementUIs')
// ElementUI.Upload = elUpload
// console.log(elUpload,'Upload')
import myUpload from "./components/upload"
Vue.use(ElementUI);
// Vue.component('Upload',elUpload)
Vue.component('upload',myUpload)
import { Button,NavBar, Tab, Tabs  } from 'vant'

Vue.use(Button).use(NavBar).use( Tab ).use( Tabs )

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'

import 'quill/dist/quill.snow.css'

import 'quill/dist/quill.bubble.css'

import Vconsole from 'vconsole';
const vConsole = new Vconsole()
Vue.use(vConsole)
import VueAMap from 'vue-amap';
import vuePopper from "element-ui/src/utils/vue-popper";

Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德key
  key: 'de8bef047ccfdfd99cd1b540b2f2d360',
  // 插件集合 （插件按需引入）
  plugin: [
    'AMap.Geocoder',//地图编码
    'AMap.Autocomplete', // 输入提示插件
    'AMap.PlaceSearch', // POI搜索插件
    'AMap.Scale', // 右下角缩略图插件 比例尺
    'AMap.OverView', // 地图鹰眼插件
    'AMap.ToolBar', // 地图工具条
    'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', // 编辑 折线多，边形
    'AMap.CircleEditor', // 圆形编辑器插件
    'AMap.Geolocation' // 定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  v: '1.4.4'
})

// VueAMap.initAMapApiLoader({
//   key: '',
//   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
//
// });

window._AMapSecurityConfig = {
	securityJsCode:'6f831b32c885d1b926b5327d723008fb',
}
Vue.config.productionTip = false

Vue.use(VueQuillEditor, {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
