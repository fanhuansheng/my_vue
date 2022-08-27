<template>
  <section>
    <father
      name="name"
      age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    ></father>
  </section>
</template>
<script>
import father from './father';
export default {
  components: {
    father
  },
  methods: {
    asd(e) {
      console.log('gr', 999,e);
    },
    isClick(e) {
      console.log('gr', 666,e);
    }
  }
};
</script>
