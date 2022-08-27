<template>
  <section>
    <div class="mt-10">
      {{ $attrs }} <====son
      {{$listeners}} <==>$listeners
      <br/>
      gender:{{ gender }}
      <son-child v-bind="$attrs" v-on="$listeners"/>
    </div>
  </section>
</template>

<script>
import sonChild from './sonChild';

export default {
  components: {
    sonChild
  },
  props: {

    gender: {
      type: String,
      default: 'default'
    }
  },
  mounted() {
    console.log('son', this.$attrs);
    console.log('son', this.$listeners);
    this.$listeners.isClick('sonClick');
    this.$listeners.asd('sonasd');
  }
};
</script>
