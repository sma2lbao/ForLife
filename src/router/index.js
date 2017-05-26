import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../modules/Login.vue'
import SignUp from '../modules/signup.vue'
import Home from '../modules/home.vue'
import AddNew from '../modules/addnew.vue'
import Setting from '../modules/setting.vue'
import TimeLine from '../modules/timeline.vue'
import Walk from '../modules/walk.vue'
import Navigation from '../modules/navigation.vue'
import List from '../modules/lists.vue'
import Overview from  '../modules/overview.vue'
import Overview2 from  '../modules/overview2.vue'
import Calendar from '../modules/calendar.vue'
import Profile from '../modules/profile.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/addnew',
      name: 'AddNew',
      component: AddNew
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/walk',
      name: 'Walk',
      component: Walk
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/overview2',
      name: 'Overview2',
      component: Overview2
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
