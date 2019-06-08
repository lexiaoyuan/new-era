<template>
  <div>
    <b-navbar class="app-nav-bar navbar-expand-sm" toggleable="sm" type="" variant="">
      <b-navbar-brand class="app-logo-title" href="#">辉煌新时代，追梦新征程</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="app-navbar-nav">
          <b-nav-item href="#">首页</b-nav-item>
          <b-nav-item href="#">新时代</b-nav-item>
          <b-nav-item href="#">新征程</b-nav-item>
          <b-nav-item href="#">新青年</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form type="light" variant="light">
            <b-form-input size="sm" class="mr-sm-2" placeholder="搜索..."></b-form-input>
            <b-button variant="outline-success" size="sm" class="app-navbar-search-submit my-2 my-sm-0" type="submit">搜索</b-button>
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
        name: ""
    }
</script>

<style scoped>
</style>
