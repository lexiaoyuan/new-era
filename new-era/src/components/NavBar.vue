<template>
  <div>
    <b-navbar class="app-nav-bar navbar-expand-sm bg-pure-red">
      <b-navbar-brand href="#">
        <img src="../assets/img/logo.png" alt="辉煌新时代 追梦新征程" class="fluid">
        <!-- 辉煌新时代 追梦新征程 -->
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">首页</b-nav-item>
          <b-nav-item to="newera">新时代</b-nav-item>
          <b-nav-item to="newjourney">新征程</b-nav-item>
          <b-nav-item to="newyouth">新青年</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form type="light" variant="light">
            <b-form-input id="bdcsMain" size="sm" class="mr-sm-2" placeholder="搜索..."></b-form-input>
            <b-button variant="outline-success" size="sm" class="app-navbar-search-submit my-2 my-sm-0" type="submit">搜索
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown class="app-navbar-language" text="中文" right>
            <b-dropdown-item href="#">English</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .bg-pure-red {
    background-color: #e70012;
  }

  .nav-link {
    color: #f8f9fa !important;
  }

  .router-link-exact-active {
    color: #ec6c00 !important;
  }

</style>
