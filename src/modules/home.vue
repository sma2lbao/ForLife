<template lang="html">
  <article class="nav-article">
    <FLHead leftIcon="menu" @listenLeft="showMenu()"  :rightText="towering" rightIcon1="weather" />
    <section>
      <div class="week">
        {{ week }}
      </div>
      <p class="date">{{ date }}</p>
    </section>
    <section>
      <div class="event-bg">
        <div class="event-tip">
          {{ undone }}
        </div>
        {{ total }}
      </div>
    </section>
    <section class="listHeight">
      <FLList1 v-for="task in taskList" :leftIcon="task.leftIcon" :centerTitle="task.centerTitle" :centerSubTitle="task.centerSubTitle"  :rightText="task.rightText" />
    </section>
    <aside class="btm-btn" @click="addEvent()">
      <i class="plus-white"></i>
    </aside>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLList1 from '../components/FLList1.vue'
import NavPage from '../modules/navigation.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'home',
  components: {FLHead, FLList1, NavPage},
  data: function () {
    return {
      towering: '',
      week: '星 期 一',
      date: '五月 25,2015',
      total: '',
      undone: '',
      taskList: Array,
    };
  },
  methods: {
    ...mapMutations(['TOGGLEMENU']),
    showMenu: function () {
      this.TOGGLEMENU();
    },
    async getWeather() {
      const response = await this.$axios.get('/weather');
      this.$data.towering = response.data.towering;
      this.$data.weatherInfo = response.data.weatherInfo;
    },
    async getDate () {
      const response = await this.$axios.get('/date');
      let date = new Date(response.data.date);
      this.$data.week = this.$util.getWeekText(date.getDay());
      let year = date.getFullYear();
      let monthDay = date.getDate();
      let month = this.$util.getMonthText(date.getMonth());
      this.$data.date = month + ' ' + monthDay + ',' + year;
    },
    async getTasks () {
      const response = await this.$axios.get('/tasks');
      let total = response.data.total;
      this.$data.total = total;
      let undone = response.data.undone;
      this.$data.undone = undone;
    },
    async fetchPosition () {
      if(navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(this.getLocation, this.getLocationError, {timeout: 8000});
      }
      else {
        alert('获取定位失败。');
      }
    },
    getLocation: function (position) {
      this.getWeather();
    },
    getLocationError: function (error) {
      alert('定位失败代码:' + error.code + '，错误信息：' + error.message);
    },
    async getTaskList () {
      const response = await this.$axios.get('/task');
      this.$data.taskList = response.data;
    },
    addEvent: function () {
      this.$router.push('AddNew');
    }
  },
  created () {
    this.fetchPosition();
    this.getDate();
    this.getTasks();
    this.getTaskList();
  },
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
      this.$router.push('SignIn');
    }
  },
}
</script>

<style lang="css">
.week{font-size: .93rem /* 70/75 */;color: #fff;text-align: center;}
.date{font-size: .29rem /* 22/75 */;color: #999;text-align: center;margin-top: .33rem /* 25/75 */;margin-bottom: .67rem /* 50/75 */;}
.event-bg{width: 3.2rem /* 240/75 */;height: 3.2rem /* 240/75 */;line-height: 3.2rem /* 240/75 */;background-color: #9198a1;border-radius: 50%;text-align: center;margin: 0 auto;position: relative;font-size: 1.33rem /* 100/75 */;color: #fff;margin-bottom: .33rem /* 25/75 */;}
.event-tip{width: 1.07rem /* 80/75 */;height: 1.07rem /* 80/75 */;border-radius: 50%;background-color: #fff;position: absolute;right: 0;top: 0;text-align: center;font-size: .35rem /* 26/75 */;line-height: 1.07rem /* 80/75 */;color: #7f7f7f;}
.listHeight{height: 9.6rem /* 720/75 */;overflow: auto;}
</style>
