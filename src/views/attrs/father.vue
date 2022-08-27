<template>
  <section>
    <div class="mt-10">
      father--$attrs:{{$attrs}}<br/>
      fater--$listeners:{{$listeners}}
      <son v-bind="$attrs" v-on="$listeners" />
    </div>
  </section>
</template>

<script>
import son from './son';
export default {
  components: {
    son
  },
  props: {
    name: {
      type: String,
      default: 'default'
    },
    age: {
      type: String,
      default: 'default'
    }
  }
};
</script>
