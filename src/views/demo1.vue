<template>
    <div>
        <van-nav-bar title="标题" />
        <div>
            <van-tabs v-model="active" swipeable :before-change="change">
                <van-tab v-for="(item,index) in arr" :title="'选项 ' + index" :key="item.index" :index="item.index" :to="item">
                    <router-view/>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
// import myDom1 from '../components/demo.vue'
export default {
    // components:{
    //     myDom1
    // },
    data() {
        return {
            active: 1,
            arr:[
                {
                index:'1',
                path:'/demo1/demo2'
                },
                {
                index:'2',
                path:'/demo1/'
                },
                {
                index:'3',
                path:'/demo1/demo2'
                },
                {
                index:'4',
                path:'/demo1/demo2'
                },{
                index:'5',
                path:'/demo1/demo2'
                },{
                index:'6',
                path:'/demo1/demo2'
                },
                {
                index:'7',
                path:'/demo1/demo2'
                },{
                index:'8',
                path:'/demo1/demo2'
                },{
                index:'9',
                path:'/demo1/demo2'
                }
            ]

        };
  },
  methods:{
      change(e){
          console.log('11111',2);
      }
  },
  watch:{
      active(newVal){
          console.log('newVal',newVal);
          if(newVal ===1){
              this.$router.push({path:'/demo1',index:newVal})
          }else{
              this.$router.push({path:'/demo1/demo2',index:newVal})

          }
      }
  }
}
</script>
<style lang="less" scoped>

li{
    width: 100px;
    height: 30px;
    background: red;
}
</style>
