<template lang="html">
  <article class="">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" headText="Overview" rightIcon1="search" />
    <section class="overview-head">
      <p class="month">{{ month }}</p>
      <p class="year">{{ year }}</p>
    </section>
    <section class="ov-list">
      <ul>
        <li>1
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>2
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>3
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>4
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>5
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>6
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
        <li>7
          <span class="statu1"></span>
          <span class="statu2"></span>
          <span class="statu3"></span>
        </li>
      </ul>
    </section>
    <section class="ov-foot">
      <ul>
        <li>
          <p class="count">37</p>
          <p class="tip">未完成</p>
          <div class="picture white">
            <div class="pic-color"></div>
          </div>
        </li>
        <li>
          <p class="count">37</p>
          <p class="tip">已完成</p>
          <div class="picture green">
            <div class="pic-color"></div>
          </div>
        </li>
        <li>
          <p class="count">37</p>
          <p class="tip">逾期</p>
          <div class="picture purple">
            <div class="pic-color"></div>
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
  name: 'overview',
  components: {FLHead, },
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
        this.$router.push('SignIn');
    }
  },
  data () {
    return {
      month: '',
      year: '',
    }
  },
  methods: {
    ...mapMutations(['TOGGLEMENU']),
    showMenu: function () {
      this.TOGGLEMENU();
    },
  },
  created () {
    this.$data.month = this.$util.getMonthText(new Date().getMonth());
    this.$data.year = new Date().getFullYear();
  }
}
</script>

<style lang="css">
.overview-head{height: 3.33rem /* 250/75 */;background-color: rgba(255, 255, 255, 0.15);text-align: center;padding-top: .67rem /* 50/75 */;}
.overview-head .month{color: #fff;font-size: .93rem /* 70/75 */;}
.overview-head .year{color: #666;font-size: .29rem /* 22/75 */;}
.ov-list ul{width: 100%;overflow: hidden;}
.ov-list li{height:7.47rem /* 560/75 */;width: 14.25%;display: inline-block;text-align: center;color: #fff;padding-top: .33rem /* 25/75 */;position: relative;float: left;}
.ov-list li + li{background: url('../../static/divider-height.png') no-repeat center left;}
.statu1{display: inline-block;position: absolute;width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;border: .07rem /* 5/75 */ solid #50d2c2;border-radius: 50%;position: absolute;left: 50%;margin-left: -.17rem /* 12.5/75 */;top: 10%;}
.statu2{display: inline-block;position: absolute;width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;border: .07rem /* 5/75 */ solid #fff;border-radius: 50%;position: absolute;left: 50%;margin-left: -.17rem /* 12.5/75 */;top: 40%;}
.statu3{display: inline-block;position: absolute;width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;border: .07rem /* 5/75 */ solid #d667cd;border-radius: 50%;position: absolute;left: 50%;margin-left: -.17rem /* 12.5/75 */;top: 70%;}
.ov-foot ul li{display: inline-block;text-align: center;}
.ov-foot{text-align: center;margin-top: .4rem /* 30/75 */;}
.ov-foot .count{font-size: 1.07rem /* 80/75 */;color: #fff;}
.ov-foot .tip{font-size: .29rem /* 22/75 */;color: #666;margin-top: .4rem /* 30/75 */;}
.ov-foot .picture{width: .87rem /* 65/75 */;height: .87rem /* 65/75 */;border-radius: 50%;border: .07rem /* 5/75 */ solid #3d3943;display: inline-block;margin-top: .4rem /* 30/75 */;padding-top: .14rem /* 10.5/75 */;}
.ov-foot ul li + li {margin-left: .93rem /* 70/75 */;}
.pic-color{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;border-radius: 50%;display: inline-block;}
.white .pic-color{background-color: #fff;}
.green .pic-color{background-color: #50d2c2;}
.purple .pic-color{background-color: #d667cd;}
</style>
