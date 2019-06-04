<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <b-navbar class="app-nav-bar" toggleable="lg" type="" variant="" >
      <b-navbar-brand class="app-logo-title ml-5 mr-5" href="#">辉煌新时代，追梦新征程</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">首页</b-nav-item>
          <b-nav-item href="#">新时代</b-nav-item>
          <b-nav-item href="#">新征程</b-nav-item>
          <b-nav-item href="#">新青年</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="搜索..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="中文" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .app-nav-bar {
    background-color: #e70012;
  }
  .app-logo-title {
    color: #fff;
  }
</style>
