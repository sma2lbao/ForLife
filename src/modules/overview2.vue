<template lang="html">
  <article class="" style="height: 100%;">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" rightIcon1="search" headText="Lists" />
    <aside class="calcHei">
      <section class="ov-switch">
        <ul>
          <li :class="{active: active== 'active'}" @click="linkNav('active')">ACTIVE</li>
          <li :class="{active: active== 'popular'}" @click="linkNav('popular')">POPULAR</li>
          <li :class="{active: active== 'recent'}" @click="linkNav('recent')">RECENT</li>
        </ul>
      </section>
      <section class="ov-pic-txt" v-if="active === 'active'">
        <ul>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">中餐</p>
              <p class="detail">8</p>
            </div>
          </li>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">西餐</p>
              <p class="detail">8</p>
            </div>
          </li>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">零食</p>
              <p class="detail">8</p>
            </div>
          </li>
        </ul>
      </section>
      <section class="ov-pic-txt" v-if="active === 'popular'">
        <ul>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">手机</p>
              <p class="detail">8</p>
            </div>
          </li>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">电脑</p>
              <p class="detail">8</p>
            </div>
          </li>
          <li>
            <div class="ov-img-left">

            </div>
            <div class="ov-txt-right">
              <p class="head">平板</p>
              <p class="detail">8</p>
            </div>
          </li>
        </ul>
      </section>
      <section class="ov-pic-txt" v-if="active === 'recent'">
      <ul>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">跑步</p>
            <p class="detail">8</p>
          </div>
        </li>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">野餐</p>
            <p class="detail">8</p>
          </div>
        </li>
        <li>
          <div class="ov-img-left">

          </div>
          <div class="ov-txt-right">
            <p class="head">音乐</p>
            <p class="detail">8</p>
          </div>
        </li>
      </ul>
    </section>
    </aside>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'overview2',
  data: function () {
    return({
      active: 'popular'
    })
  },
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
    linkNav: function (text) {
      switch (text) {
        case 'active':
          this.$data.active = 'active';
          break;
        case 'popular':
          this.$data.active = 'popular';
          break;
        case 'recent':
          this.$data.active = 'recent';
          break;
        default:

      }
    }
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
  .calcHei{height: calc(100% - 1.73rem) /* 130/75 */;overflow: auto;}
</style>
