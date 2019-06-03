<template>
  <div id="app">
    <el-header>
      <el-row  type="flex" justify="space-between">
        <el-col :span="16">
          <el-link class="ml-5 mt-2 logo-title" :underline="false">辉煌新时代，追梦新征程</el-link>
        </el-col>
        <el-col :span="8">
          <el-menu
            :default-active="activeIndex"
            class="pr-4 el-menu el-menu--horizontal"
            mode="horizontal"
            @select="handleSelect"
            text-color="#E70012"
            active-text-color="#EC6C00">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">新时代</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">新征程</el-menu-item>
            <el-menu-item index="4">新青年</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .logo-title {
    font-size: 25px;
    color: #E70012;
  }
  .logo-title:hover {
    color: #EC6C00;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
</style>
