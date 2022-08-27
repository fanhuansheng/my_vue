<template>
  <div id="app">
    <div class="amap-page-container">
      <div class="toolbar">当前坐标: {{ lng }}, {{ lat }}</div>
      <el-amap-search-box
          class="search-box"
          :search-option="searchOption"
          :on-search-result ="onSearchResult"
      >
        <!-- 搜索条件 是个对象 属性是city城市名，citylimit：false； 搜索回调函数 -->
        
      </el-amap-search-box>
      <el-amap
        vid="amapDemo"
        :center="center"
        :amap-manager="amapManager"
        :zoom="zoom"
        :plugin="plugin"
        class="amap-demo"
        :events="events"
        pitch-enable="false"
      >
        <el-amap-marker
          v-for="(marker,index) in markers"
          :key="index"
          :events="marker.events"
          :position="marker.position"
          :draggable="marker.draggable"
        />
        <el-amap-info-window
          v-if="window"
          :position="window.position"
          :visible="window.visible"
          :content="window.content"
          :offset="window.offset"
          :close-when-click-map="true"
          :is-custom="true"
        >
          <div id="info-window">
            <p>{{ window.address }}</p>
            <div class="detail" @click="checkDetail">查看详情</div>
          </div>
        </el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>

<script>
//引入获取实例
import {AMapManager} from "vue-amap"
let amapManager= new AMapManager();
let Geocoder;     //先声明变量
export default {
  name: "AmapPage",
  data() {
    const self = this;
    return {
      data: [
        {
          position: "113.645422, 34.730936",
          address: "另一个地址",
        }
      ],
      zoom: 10,
      center: [113.645422, 34.730936],
      searchOption: {
        city: "全国",
        citylimit: false,
      },
      amapManager,
      markers: [],
      windows: [],
      window: "",
      events: {
        click(e) {
          const { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          self.center = [lng, lat];
          console.log(self.center)
          self.markers=[];
          self.markers.push(self.center)
          Geocoder.getAddress(self.center, function (status, result) { //根据坐标获取位置
            if (status === "complete" && result.info === "OK") {
              console.log(result.regeocode.formattedAddress)
              self.input = result.regeocode.formattedAddress;
              document.querySelector(".search-box-wrapper input").value = self.input;
              }
          })
        },
        
        complete(e){
          console.log('complete',e)
        }
      },
      lng: 0,
      lat: 0,
      plugin: [
        {
          pName: "DistrictSearch",
          events: {
            init(data) {
              console.log('init',data);
            },
          },
        },
        {
          // 定位
          pName: "Geolocation",
          events: {
            init(o) {
              // o是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  // 设置经度
                  self.lng = result.position.lng;
                  // 设置维度
                  self.lat = result.position.lat;
                  // 设置坐标
                  self.center = [self.lng, self.lat];
                  self.markers.push([self.lng, self.lat]);
                  // load
                  self.loaded = true;
                  // 页面渲染好后
                  self.$nextTick();
                }
              });
            },
          },
        },
        //Geocoder编码：根据地理名称来获得地点的经纬度
        {
          pName:"Geocoder",
          events:{
            init:(o)=>{
              Geocoder = o; // o 则是AMap.Geocoder的实例 对外部的Geocoder变量进行赋值，在任何地方就都可以使用
              //data里的events中使用了Geocoder
              o.getAddress(self.center, function (status, result) { //根据坐标获取位置
                if (status === "complete" && result.info === "OK") {
                  self.input = result.regeocode.formattedAddress;
                  document.querySelector(".search-box-wrapper input").value = self.input;
                  console.log('Geocoder===',self.input);
                }
              })
            }
          }
        },

        {
          // 工具栏
          pName: "ToolBar",
          events: {
            init(instance) {
              // console.log(instance);
            },
          },
        },
        {
          // 鹰眼（暂且没用到）
          pName: "OverView",
          events: {
            init(instance) {
              // console.log(instance);
            },
          },
        },
        {
          // 地图类型
          pName: "MapType",
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            },
          },
        },
        {
          // 搜索（暂且没用到）
          pName: "PlaceSearch",
          events: {
            init(instance) {
              // console.log(instance)
            },
          },
        },
      ],
    };
  },
  mounted() {
    this.point();
  },
  methods: {
    point() {
      const markers = [];
      const windows = [];
      const that = this;
      this.data.forEach((item, index) => {
        markers.push({
          position: item.position.split(","),
          // icon:item.url, //不设置默认蓝色水滴
          title: '测试发动机上了飞机',
          draggable: true,
          events: {
            // click() {
            //   // 方法：鼠标移动到点标记上，显示相应窗体
            //   that.windows.forEach((window) => {
            //     window.visible = false; // 关闭窗体
            //   });
            //   that.window = that.windows[index];
            //   that.$nextTick(() => {
            //     that.window.visible = true;
            //   });
            // },
            dragend: (e) => {
              console.log('---event---: dragend',e)
              // this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
        });
        windows.push({
          position: item.position.split(","),
          isCustom: true,
          offset: [115, 55], // 窗体偏移
          showShadow: false,
          visible: false, // 初始是否显示
          address: item.address,

        });
      });
      //  加点
      this.markers = markers;
      // 加弹窗
      this.windows = windows;
    },
    checkDetail() {
      alert("点击了查看详情");
    },
    onSearchResult(pois){
        console.log('onSearchResult',pois)
        this.input = document.querySelector('.search-box-wrapper input').value 
        this.center = [pois[0].lng,pois[0].lat]        //选择了第一个值
        this.markers = [];    //标记点先清空
        this.markers.push([pois[0].lng,pois[0].lat])   //把搜索的位置的第一个值存入标记中并显示标记点
        console.log(this.markers);
      }
  },
};
</script>

<style scoped>
.amap-demo {
  height: 120vh;
}

.amap-page-container {
  position: relative;
}

#info-window {
  width: 211px;
  height: 146px;
  margin-left: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.detail {
  width: 100%;
  height: 24px;
  color: #fff;
  background-color: #1a73e8;
  position: absolute;
  bottom: 0;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
</style>
