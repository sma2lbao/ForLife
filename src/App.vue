<template>
  <div id="app">
    <div class="nav-page" v-if="this.$store.state.showMenu">
      <navigation />
      <div class="nav-page-bg" @click="hideMenu()">
      </div>
    </div>
    <router-view :class="this.$store.state.showMenu ? 'trans-page' : ''"></router-view>
  </div>
</template>

<script>
import navigation from './modules/navigation.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'app',
  components: {navigation},
  methods:{
    ...mapMutations(['TOGGLEMENU']),
    hideMenu: function () {
      this.TOGGLEMENU();
    },
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-color: #000;
  background: url('../static/bg.png') no-repeat center center;
  background-size: contain;
  overflow: auto;
  overflow-x: hidden;
}
.nav-page{width: 100%;height: 100%;z-index: 999;position: fixed;left: 0;bottom: 0;overflow: hidden;}
.nav-page-bg{width: 20%;height: 100%;position: fixed;top: 0;right: 0;}
.trans-page{transform: translateX(80%);}
</style>
