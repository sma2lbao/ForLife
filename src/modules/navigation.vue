<template lang="html">
  <article class="navigation-page">
    <section class="head-pane">
      <div class="pic-bg">
        <img :src="this.$store.state.userHeadPicture" alt="">
      </div>
      <div class="pic-info">
        <p class="name">
          Janet Valdez
        </p>
        <p>janet@invisionapp.com</p>
      </div>
    </section>
    <section class="nav-list">
      <ul>
        <li @click="toHome()"><i class="home"></i> Home <span>6</span></li>
        <li @click="toCalendar()"><i class="calendar"></i> Calendar </li>
        <li @click="toOverview()"><i class="overview"></i> Overview </li>
        <li @click="toGroups()"><i class="groups"></i> Groups <span>6</span></li>
        <li @click="toLists()"><i class="lists"></i> Lists <span>6</span></li>
        <li @click="toProfile()"><i class="profile"></i> Profile </li>
        <li @click="toTimeline()"><i class="timeline"></i> Timeline </li>
      </ul>
    </section>
    <section class="nav-list border">
      <ul>
        <li @click="toSettings()"><i class="settings"></i> Settings </li>
        <li @click="toLogout()"><i class="logout"></i> Logout </li>
      </ul>
    </section>
  </article>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations(['TOGGLEMENU', 'SIGNOUT']),
    toHome: function () {
      this.$router.push('Home');
      this.TOGGLEMENU();
    },
    toCalendar: function () {
      this.$router.push('Calendar');
      this.TOGGLEMENU();
    },
    toOverview: function () {
      this.$router.push('Overview');
      this.TOGGLEMENU();
    },
    toGroups: function () {
      this.$router.push('Overview2');
      this.TOGGLEMENU();
    },
    toLists: function () {
      this.$router.push('List');
      this.TOGGLEMENU();
    },
    toProfile: function () {
      this.$router.push('Profile');
      this.TOGGLEMENU();
    },
    toTimeline: function () {
      this.$router.push('Timeline');
      this.TOGGLEMENU();
    },
    toSettings: function () {
      this.$router.push('Setting');
      this.TOGGLEMENU();
    },
    toLogout: function () {
      this.SIGNOUT();
      this.$router.push('SignIn');
      this.TOGGLEMENU();
    },
  }
}
</script>

<style lang="css" scoped>
.navigation-page{width: 80%;height: 100%;background-color: #fff;padding-left: .67rem /* 50/75 */;padding-top: .67rem /* 50/75 */;padding-right: .87rem /* 65/75 */;}
.nav-list{padding-top: .67rem /* 50/75 */;margin-bottom: .67rem /* 50/75 */;}
.border{background: url('../../static/divider-black.png') no-repeat top center;}
.nav-list li{height: 1.33rem /* 100/75 */;width: 100%;line-height: 1.33rem /* 100/75 */;list-style: none;}
.pic-bg{width: 1.4rem /* 105/75 */;height: 1.4rem /* 105/75 */;display: inline-block;background-color: #000;border-radius: 50%;vertical-align: middle;margin-right: .67rem /* 50/75 */;}
.pic-bg img{width: 100%;height: 100%;border-radius: 50%;}
.pic-info{display: inline-block;height: 1.4rem /* 105/75 */;vertical-align: middle;}
.pic-info .name{font-size: .53rem /* 40/75 */;color: #000;}
.pic-info p{color: #999;line-height: .73rem /* 55/75 */;}
.head-pane{padding-bottom: .53rem /* 40/75 */;background: url('../../static/divider-black.png') no-repeat bottom center;}
.nav-list ul li{overflow: hidden;}
.nav-list ul li i{display: inline-block;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;margin-right: .67rem /* 50/75 */;vertical-align: middle;}
.nav-list ul li span{float: right;}
.home{background: url('../../static/n-home.png') no-repeat center center;}
.calendar{background: url('../../static/n-calendar.png') no-repeat center center;}
.overview{background: url('../../static/n-overview.png') no-repeat center center;}
.groups{background: url('../../static/n-groups.png') no-repeat center center;}
.lists{background: url('../../static/n-lists.png') no-repeat center center;}
.profile{background: url('../../static/n-profile.png') no-repeat center center;}
.timeline{background: url('../../static/n-timeline.png') no-repeat center center;}
.settings{background: url('../../static/n-settings.png') no-repeat center center;}
.logout{background: url('../../static/n-logout.png') no-repeat center center;}
</style>
