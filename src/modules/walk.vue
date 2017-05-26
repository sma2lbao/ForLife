<template lang="html">
  <article class=""  @touchstart="handleStart($event)" @touchend="handelEnd($event)">
    <FLHead leftIcon="back" headText="Sign up" @listenLeft="goBack()" />
    <section class="pages">
      <div :class="fpClass">
        <img style="width: 100%;height: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496224612&di=2c578b5cfb98fe33061dc7c0703f3fc7&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F69%2F88%2F564ec350569c1_1024.jpg" alt="">
      </div>
      <div :class="spClass">
        <img style="width: 100%;height: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629792880&di=a76247798ea52c66892b85da01392fa2&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201511%2F06%2F20151106101748_HJne2.jpeg" alt="">
      </div>
      <div :class="tpClass">
        <img style="width: 100%;height: 80%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496224715&di=9630aa21663cc4f1c3c9cbadea785158&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F48%2F17%2F5627b09f8190a_1024.jpg" alt="">
        <button type="button" name="button" @click="join()">Join</button>
      </div>
    </section>
    <div class="pages-tools">
      <ul>
        <li :class="page1 == 1 ? 'active' : ''"></li>
        <li :class="page2 == 1 ? 'active' : ''"></li>
        <li :class="page3 == 1 ? 'active' : ''"></li>
      </ul>
    </div>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLButton from '../components/FLButton.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'walk',
  components: {FLHead, FLButton},
  data: function () {
    return {
      start: Number,
      end: Number,
      page1: 1,
      page2: 2,
      page3: 3,
    };
  },
  methods: {
    ...mapMutations(['SIGNOUT']),
    handleStart: function (e) {
      this.$data.start = e.touches[0].pageX;
    },
    handelEnd: function (e) {
      this.$data.end = e.changedTouches[0].pageX;
      this.movePage(this.moveX);
    },
    movePage: function (moveX) {
      if(moveX < -300 && this.$data.page3 != 1) {
        this.$data.page1 == 1 ? this.$data.page1 = 3 : this.$data.page1 -= 1;
        this.$data.page2 == 1 ? this.$data.page2 = 3 : this.$data.page2 -= 1;
        this.$data.page3 == 1 ? this.$data.page3 = 3 : this.$data.page3 -= 1;
      } else if(moveX > 300 && this.$data.page1 != 1) {
        this.$data.page1 == 3 ? this.$data.page1 = 1 : this.$data.page1 += 1;
        this.$data.page2 == 3 ? this.$data.page2 = 1 : this.$data.page2 += 1;
        this.$data.page3 == 3 ? this.$data.page3 = 1 : this.$data.page3 += 1;
      }
    },
    join: function functionName() {
      this.$router.push('Home');
    },
    goBack: function () {
      this.SIGNOUT();
      this.$router.go(-1);
    }
  },
  computed: {
    moveX: function () {
      return this.$data.end - this.$data.start;
    },
    fpClass: function () {
      var page = this.$data.page1;
      switch (page) {
        case 1:
          return 'first-page';
          break;
        case 2:
          return 'second-page';
          break;
        case 3:
          return 'third-page';
          break;
        default:
          return 'first-page';
      }
    },
    spClass: function () {
      var page = this.$data.page2;
      switch (page) {
        case 1:
          return 'first-page';
          break;
        case 2:
          return 'second-page';
          break;
        case 3:
          return 'third-page';
          break;
        default:
          return 'second-page';
      }
    },
    tpClass: function () {
      var page = this.$data.page3;
      switch (page) {
        case 1:
          return 'first-page';
          break;
        case 2:
          return 'second-page';
          break;
        case 3:
          return 'third-page';
          break;
        default:
          return 'third-page';
      }
    }
  },
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
        this.$router.push('SignIn');
    }
  }
}
</script>

<style lang="css" scoped>
.pages{position: relative;width: 100%;height: 12.93rem /* 970/75 */;}
.first-page{width: 8.13rem /* 610/75 */;height: 10.67rem /* 800/75 */;background-color: #fff;margin: 0 auto;position: absolute;left: 50%;margin-left: -4.07rem /* 305/75 */;top: 2.27rem /* 170/75 */;z-index: 999;}
.second-page{width: 7.2rem /* 540/75 */;height: 9.33rem /* 700/75 */;background-color: #fff;margin: 0 auto;opacity: 0.6;position: absolute;left: 50%;margin-left: -3.6rem /* 270/75 */;top: 1.87rem /* 140/75 */;z-index: 99;overflow: hidden;}
.third-page{width: 5.87rem /* 440/75 */;height: 7.73rem /* 580/75 */;background-color: #fff;margin: 0 auto;opacity: 0.6;position: absolute;left: 50%;margin-left: -2.93rem /* 220/75 */;top: 1.47rem /* 110/75 */;z-index: 9;overflow: hidden;}
.pages-tools{margin-top: 1.47rem /* 110/75 */;text-align: center;}
.pages-tools li{display: inline-block;width: .27rem /* 20/75 */;height: .27rem /* 20/75 */;border-radius: 50%;background-color: #999;vertical-align: middle;}
.pages-tools li + li{margin-left: .4rem /* 30/75 */;}
.pages-tools li.active{width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;background-color: #fff;vertical-align: middle;}
.pages button{width: 80%;margin: .27rem /* 20/75 */ auto;height: 1.47rem /* 110/75 */;line-height: 1.47rem /* 110/75 */;border-radius: 1.47rem /* 110/75 */;font-size: .4rem /* 30/75 */;display: block;border: none;color: #fff;background-color: #f36;outline: none;}
</style>
