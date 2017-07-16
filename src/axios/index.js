import Vue from 'Vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://119.23.50.36:3000/api/forlife'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

export default {
  install: function (Vue, ) {
    Object.defineProperty(Vue.prototype, '$axios', {value: axios});
  }
}
