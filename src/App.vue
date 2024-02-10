<template>
  <HeaderComponent msg="Welcome to My Website"/>
  <div>
    <router-view v-slot="{Component}" :key="componentKey">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/header-footer/HeaderComponent.vue'



export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data(){
    return{
      // store,
      componentKey:0,
    }
  },
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
</style>
