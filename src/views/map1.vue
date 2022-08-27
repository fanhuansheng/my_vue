<template>
  <div>
    <div>this is map test</div>
    <a-map @updateLocation="updateLocation"></a-map>
  </div>
</template>

<script>
import aMap from '../components/map1.vue'
export default {
  name: "my-map",
  components:{
    aMap
  },
  methods:{
    updateLocation(Addr) {
        console.log('位置信息：',Addr)
    }

  }
}
</script>

<style scoped>

</style>
