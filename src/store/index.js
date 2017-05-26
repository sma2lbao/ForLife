import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
// import types from './types.js'

Vue.use(Vuex);

const state = {
  isLogin: false,
  userName: '',
  userHeadPicture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496135337&di=24f57c41b8cb15c2c8c97fb6236bd55b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.niutuku.com%2Fphone%2F1301%2F5240%2F5240-niutuku.com-463309.jpg',
  showMenu: false,
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})
