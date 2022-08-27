<template>

</template>

<script>
export default {
  name: "d1",
  methods:{
    getPosition(){
      let self = this
      navigator.geolocation.getCurrentPosition(
        function (position) {
          self.position = [position.coords.longitude,position.coords.latitude]
          self.center = [position.coords.longitude,position.coords.latitude]

        },
        function (e) {
          throw(e.message);
        }
      )
    },
  }
}

</script>

<style scoped>

</style>
