import Vue from 'vue'
import util from './util.js'
export default {
  install: function (Vue, ) {
    Object.defineProperty(Vue.prototype, '$util', {value: util});
  }
}
