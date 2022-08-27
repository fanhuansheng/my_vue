<template>
  <div>

    <router-link to="/HelloWorld">HelloWorld</router-link>
    <br/>
    <router-link to="/demo1">demo1</router-link>
    <br/>
    <button type="button" @click="goPage('video')">video路由传参</button>
    <br/>
    <router-link to="/editor">editor</router-link>
    <br/>
    <router-link to="/map">map</router-link>
    <br/>
    <router-link to="/upload">upload</router-link>
    <br/>
    <router-link to="/attrs">$attrs,$listeners</router-link>
    <br/>

  </div>
</template>

<script>

export default {
  name: "index",
  methods: {
    goPage(params) {
      this.$router.push({
        path: '/video',
        query: {
          srcUrl: 'https://www.huya.com/632956'
        }
      })

    }
  }
}
</script>

<style scoped>

</style>
