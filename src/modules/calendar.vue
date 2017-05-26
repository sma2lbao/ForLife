<template lang="html">
  <article class="">
    <FLHead @listenLeft="showMenu()" @listenIcon1="nextMonth()" @listenIcon2="preMonth()" leftIcon="menu" :headText="monthYear" rightIcon1="right" rightIcon2="left" />
    <section class="date">
      <span class="date-item date-week">Sun</span>
      <span class="date-item date-week">Mon</span>
      <span class="date-item date-week">Tue</span>
      <span class="date-item date-week">Wed</span>
      <span class="date-item date-week">Thu</span>
      <span class="date-item date-week">Fri</span>
      <span class="date-item date-week">Sat</span>

      <span class="date-item" v-for="day in emptyDay"></span>
      <span  class="date-item" v-for="day in monthDay" :class="activeDay == day ? 'active' : ''" @click="handleClick(day)">{{ day }}</span>

    </section>
    <section>
      <FLList1 v-for="task in tasks" :leftIcon="task.leftIcon"
      :centerTitle="task.centerTitle"
      :centerSubTitle="task.centerSubTitle"
      :rightText="task.rightText"
      :rightIcon="task.rightIcon" />

    </section>
    <aside class="btm-btn" @click="toList()">
      <i class="filter-white"></i>
    </aside>
  </article>

</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLList1 from '../components/FLList1.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'calendar',
  components: {FLHead, FLList1},
  data () {
    return {
      monthDay: Array,
      emptyDay: Array,
      monthYear: '',
      activeDay: new Date().getDate(),
      date: new Date(),
      tasks: Array,
    };
  },
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
        this.$router.push('SignIn');
    }
  },
  methods: {
    ...mapMutations(['TOGGLEMENU']),
    showMenu: function () {
      this.TOGGLEMENU();
    },
    getMonthDays: function (day) {
      let last = this.$util.getLastDay(day);
      let lastDay = new Date(last).getDate();
      let days = new Array();
      for (var i = 1; i <= lastDay; i++) {
        days.push(i);
      }
      this.$data.monthDay = days;
    },
    getEmptyDays: function (day) {
      let first = this.$util.getFirstDay(day);
      let firstDay = new Date(first).getDay();
      let days = new Array();
      for (let i = 1; i <= firstDay; i++) {
        days.push(i);
      }
      this.$data.emptyDay = days;
    },
    getMonthYear: function (day) {
      const monthT = this.$util.getMonthText(day.getMonth());
      const year = day.getFullYear();
      this.$data.monthYear = monthT + ' ' + year;
    },
    handleClick: function (day) {
      this.$data.activeDay = day;
    },
    preMonth: function () {
      let dateObj = this.$data.date;
      let month = dateObj.getMonth();
      let year = dateObj.getFullYear();
      let reMonth = new Number();
      let reYear = new Number();
      if (month == 0) {
        reMonth = 11;
        reYear = year - 1;
      }
      else {
        reMonth = month - 1;
        reYear = year;
      }
      if(reYear == new Date().getFullYear() && reMonth == new Date().getMonth()){
        this.$data.date = new Date(reYear, reMonth, new Date().getDate());
      }
      else {
        this.$data.date = new Date(reYear, reMonth, 1);
      }
      this.$data.activeDay = this.$data.date.getDate();
      this.getMonthDays(this.$data.date);
      this.getEmptyDays(this.$data.date);
      this.getMonthYear(this.$data.date);
    },
    nextMonth: function () {
      let dateObj = this.$data.date;
      let month = dateObj.getMonth();
      let year = dateObj.getFullYear();
      let reMonth = new Number();
      let reYear = new Number();
      if (month == 11) {
        reMonth = 0;
        reYear = year + 1;
      }
      else {
        reMonth = month + 1;
        reYear = year;
      }

      if(reYear == new Date().getFullYear() && reMonth == new Date().getMonth()){
        this.$data.date = new Date(reYear, reMonth, new Date().getDate());
      }
      else {
        this.$data.date = new Date(reYear, reMonth, 1);
      }
      this.$data.activeDay = this.$data.date.getDate();
      this.getMonthDays(this.$data.date);
      this.getEmptyDays(this.$data.date);
      this.getMonthYear(this.$data.date);
    },
    async getTasks () {
      const response = await this.$axios.get('/tasklist');
      this.$data.tasks = response.data;
      console.log(response.data);
    },
    toList: function () {
      this.$router.push('TimeLine');
    }
  },
  created: function () {
    this.getMonthDays(this.$data.date);
    this.getEmptyDays(this.$data.date);
    this.getMonthYear(this.$data.date);
    this.getTasks();
  },

}
</script>

<style lang="css" scoped>
.date{width: 100%;overflow: hidden;text-align: left;overflow: hidden;}
.date-item{width: 14.2%;height: 1.33rem /* 100/75 */;line-height: 1.33rem /* 100/75 */;font-size: .4rem /* 30/75 */;color: #fff;display: inline-block;position: relative;text-align: center;float: left;}
.date-week{color: #999;}
.date-item.active{border-radius: 50%;background-color: #8e939c;}
.date-item.event::after{content: "";display: inline-block;width: .16rem /* 12/75 */;height: .16rem /* 12/75 */;border: .04rem /* 3/75 */ solid #bbbec3;border-radius: 50%;position: absolute;bottom: .16rem /* 12/75 */;left: 50%;margin-left: -.12rem /* 9/75 */;}
</style>
