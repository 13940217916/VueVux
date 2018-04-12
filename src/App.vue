<template>
  <div id="app">
    <router-view/>
    <v-tab></v-tab>
  </div>
</template>

<script>
  import Nav_tab from './components/tab_bar/tab_bar'
export default {
  name: 'App',
  components:{
    'v-tab':Nav_tab
  }
}
</script>

<style>
  body,html{
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background:#fff;
}
</style>
