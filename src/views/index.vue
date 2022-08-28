<template>
  <div>
    <el-container>
      <el-header style="padding: 10px">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">个人网址</div>
          </el-col>
          <el-col :span="4">
            <div class="bg-purple">
              <el-button type="primary">登陆</el-button>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="bg-purple">
              <el-button type="danger">注销</el-button>
            </div>
          </el-col>

        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
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
        </el-main>
      </el-container>
    </el-container>


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
.grid-content {
  background: #cccccc;
}
</style>
