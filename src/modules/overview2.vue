<template lang="html">
  <article class="">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" rightIcon1="search" headText="Lists" />
    <section class="ov-switch">
      <ul>
        <li>ACTIVE</li>
        <li>POPULAR</li>
        <li class="active">RECENT</li>
      </ul>
    </section>
    <section class="ov-pic-txt">
      <ul>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">Salads</p>
            <p class="detail">8</p>
          </div>
        </li>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">Salads</p>
            <p class="detail">8</p>
          </div>
        </li>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">Salads</p>
            <p class="detail">8</p>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'overview2',
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
  .ov-switch{text-align: center;margin-bottom: .4rem /* 30/75 */;}
  .ov-switch ul li{display: inline-block;color: #fff;font-size: .32rem /* 24/75 */;line-height: .53rem /* 40/75 */;height: .53rem /* 40/75 */;}
  .ov-switch ul li.active{border-bottom: .03rem /* 2/75 */ solid #fff;}
  .ov-switch ul li + li{margin-left: 1.2rem /* 90/75 */;}
  .ov-pic-txt ul li{list-style: none;height: 4.8rem /* 360/75 */;margin-top: .4rem /* 30/75 */;}
  .ov-img-left{width: 50%;height: 100%;float: left;background-color: #ddd;}
  .ov-txt-right{width: 50%;height: 100%;float: left;background-color: #8c949f;text-align: center;padding-top: 1.47rem /* 110/75 */;}
  .ov-txt-right .head{font-size: .53rem /* 40/75 */;color: #fff;}
  .ov-txt-right .detail{font-size: .29rem /* 22/75 */;color: #fff;height: .8rem /* 60/75 */;line-height: .8rem /* 60/75 */;width: .8rem /* 60/75 */;border-radius: 50%;background-color: #959ba4;display: inline-block;margin-top: .4rem /* 30/75 */;}
</style>
