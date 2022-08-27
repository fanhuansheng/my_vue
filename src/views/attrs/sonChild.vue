<template>
  <section>
    <div class="mt-10">
      {{ $attrs }} 在$attrs里面只会有props没有注册的属性
      <br/>
    </div>
  </section>
</template>

<script>

export default {

  mounted() {
    console.log('sonChild', this.$attrs);
    console.log('sonChild', this.$listeners);
    this.$listeners.isClick('sonChild--isClick');
    this.$listeners.asd('sonChild---asd');
  }
};
</script>
