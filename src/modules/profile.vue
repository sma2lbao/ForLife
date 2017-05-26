<template lang="html">
  <article class="">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" headText="Profile" rightIcon1="ellipses" />
    <section class="profile-head">
      <i class="left-small"></i>
      <i class="right-small"></i>
      <p class="profile-date">
        <span>January</span><br>
        <span>2016</span>
      </p>
      <div class="profile-img">
        <img :src="this.$store.state.userHeadPicture" alt="" >
      </div>
    </section>
    <section class="profile-info">
      <div class="info-left white-color">
        <div class="info-color"></div>
      </div>
      <div class="info-center">
        <p class="tip">未完成</p>
        <p class="count">14</p>
      </div>
      <div class="info-right">
        <i class="lists"></i>
      </div>
    </section>

    <section class="profile-info">
      <div class="info-left green-color">
        <div class="info-color"></div>
      </div>
      <div class="info-center">
        <p class="tip">已完成</p>
        <p class="count">34</p>
      </div>
      <div class="info-right">
        <i class="lists"></i>
      </div>
    </section>

    <section class="profile-info">
      <div class="info-left purple-color">
        <div class="info-color"></div>
      </div>
      <div class="info-center">
        <p class="tip">逾期</p>
        <p class="count">54</p>
      </div>
      <div class="info-right">
        <i class="lists"></i>
      </div>
    </section>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'profile',
  components: {FLHead, },
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
  }
}
</script>

<style lang="css" scoped>
.profile-head{height: 5.2rem /* 390/75 */;background-color: #81868e;position: relative;text-align: center;}
.profile-head i{position: absolute;display: inline-block;width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;border-top: 1px solid #fff;border-right: 1px solid #fff;}
.left-small{left: .56rem /* 42/75 */;top: 1.33rem /* 100/75 */;-webkit-transform: rotate(-135deg);-moz-transform: rotate(-135deg);-ms-transform: rotate(-135deg);-o-transform: rotate(-135deg);transform: rotate(-135deg);}
.right-small{right: .56rem /* 42/75 */;top: 1.33rem /* 100/75 */;-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}
.profile-date{color: #fff;padding-top: .93rem /* 70/75 */;}
.profile-date span:first-child{font-size: .93rem /* 70/75 */;}
.profile-date span:last-child{font-size: .29rem /* 22/75 */;}
.profile-img{display: inline-block;width: 1.33rem /* 100/75 */;height: 1.33rem /* 100/75 */;background-color: #000;border: none;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;margin-top: .53rem /* 40/75 */;overflow: hidden;}
.profile-img{width: 1.33rem /* 100/75 */;height: 1.33rem /* 100/75 */;}
.profile-img img{width: 100%;height: 100%;}
.profile-info{height: 3.67rem /* 275/75 */;width: 100%;background: url('../../static/divider.png') no-repeat bottom center;overflow: hidden;text-align: center;padding: .93rem /* 70/75 */ 1.2rem /* 90/75 */;position: relative;}
.info-left{float: left;width: .87rem /* 65/75 */;height: .87rem /* 65/75 */;border: .04rem /* 3/75 */ solid #5a5b65;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;margin-top: .47rem /* 35/75 */;position: absolute;top: 50%;margin-top: -.43rem /* 32.5/75 */;left: 1.2rem /* 90/75 */;}
.info-right{float: right;width: .87rem /* 65/75 */;height: .87rem /* 65/75 */;margin-top: .47rem /* 35/75 */;position: absolute;top: 50%;margin-top: -.43rem /* 32.5/75 */;right: 1.2rem /* 90/75 */;}
.info-right i{display: inline-block;width: .87rem /* 65/75 */;height: .87rem /* 65/75 */;}
.lists{background: url('../../static/lists.png') no-repeat center center;}
.info-center .tip{font-size: .27rem /* 20/75 */;color: #fff;}
.info-center .count{font-size: 1.33rem /* 100/75 */;color: #fff;}
.info-color{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;position: absolute;top: 50%;left: 50%;margin-top: -.1rem /* 7.5/75 */;margin-left: -.1rem /* 7.5/75 */;}
.white-color .info-color{background-color: #fff;}
.green-color .info-color{background-color: #50d2c2;}
.purple-color .info-color{background-color: #d667cd;}
</style>
