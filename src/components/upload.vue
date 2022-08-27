<template>
  <el-upload
    class="avatar-uploader-pub"
    v-bind="$attrs"
    v-on="$listeners"
    :headers="headers"
    >
    <slot></slot>
  </el-upload>
</template>

<script>
export default {
  name: "upload"
  ,data(){
    return{
      headers:{
        token:'888888',
        type:'upload',
        name:'aaaa'
      }
    }
  }
}
</script>
