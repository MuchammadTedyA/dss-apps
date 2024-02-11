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
import store from '@/assets/js/store'

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v)=>{
    const parts = v.split("=")
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, "")
}

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data(){
    return{
      store,
      componentKey:0,
    }
  },
  beforeMount(){
    // check for cookie
    let data = getCookie("_site_data")

    if (data !== ""){
      let cookieData = JSON.parse(data)

      // update store
      store.token = cookieData.token.token
      store.user = {
        id : cookieData.user.id,
        first_name : cookieData.user.first_name,
        last_name : cookieData.user.last_name,
        email : cookieData.user.email,
      }
    }
  },
  methods: {
    success(msg){
      alert({
        type: 'success',
        text: msg,
      })
    },
    error(msg){
      alert({
        type: 'error',
        text: msg,
      })
    },
    warning(msg){
      alert({
        type: 'warning',
        text: msg,
      })
    },
    forceUpdate() {
      this.componentKey += 1
    }
  }
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
