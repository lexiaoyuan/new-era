<template>
  <div>
    <b-navbar class="app-nav-bar navbar-expand-sm bg-pure-red">
      <b-navbar-brand class="app-logo-title text-light" href="#">辉煌新时代，追梦新征程</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="app-navbar-nav text-light">
          <b-nav-item>
            <router-link to="/" class="active">首页</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/newera" class="text-light">新时代</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/newjourney" class="text-light">新征程</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/newyouth" class="text-light">新青年</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form type="light" variant="light">
            <b-form-input size="sm" class="mr-sm-2" placeholder="搜索..."></b-form-input>
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

  .active {
    color: #ec6c00;
  }

</style>
