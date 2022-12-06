<template>
  <div id="app">
    <HeaderMobile id="headerMobile" />
    <HomeView id="homeView" />
  </div>
</template>

<script>
import HeaderMobile from './components/HeaderMobile.vue';
import HomeView from './views/HomeView.vue';

export default {
  name: "App",
  components: {
    HeaderMobile,
    HomeView,
  }
}
</script>

<style scoped>
@media screen and (max-width:1096px) {
  #homeView {
    display: none;
  }
}
</style>
 

