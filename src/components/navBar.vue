<template>
  <div>
    <van-nav-bar
      :title="title"
      :leftText="leftTxt"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "navBar",
  props:{
    title:{
      type: String,
      default: '标题'
    },
    leftTxt:{
      type: String,
      default: '返回'
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
