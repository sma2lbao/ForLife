<template lang="html">
  <div class="fl-header">
    <span class="left-span" v-if="leftIcon"><i :class="leftIcon" @click="leftIconClick()"></i></span>
    <span>{{ headText }}</span>
    <span class="right-span"><span v-if="rightText">{{rightText}}</span><i v-if="rightIcon2" :class="rightIcon2" @click="listenClickIcon2()"></i><i v-if="rightIcon1" :class="rightIcon1" @click="listenClickIcon1()"></i></span>
  </div>
</template>

<script>
export default {
  name: 'FLHead',
  props: {
    leftIcon: {
      type: String,
      default: '',
    },
    headText: {
      type: String,
      default: '',
    },
    rightText: {
      type: String,
      default: '',
    },
    rightIcon1: {
      type: String,
      default: '',
    },
    rightIcon2: {
      type: String,
      default: '',
    },
  },
  methods: {
    leftIconClick: function () {
      this.$emit('listenLeft');
    },
    listenClickIcon1: function () {
      this.$emit('listenIcon1');
    },
    listenClickIcon2: function () {
      this.$emit('listenIcon2');
    },
  }
}
</script>

<style lang="css">
.fl-header{position: relative;top: 0;left: 0;width: 100%;text-align: center;height: 1.73rem /* 130/75 */;padding: .4rem /* 30/75 */;font-size: .45rem /* 34/75 */;color: #fff;}
.fl-header .left-span{position: absolute;left: .4rem /* 30/75 */;top: .4rem /* 30/75 */;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;}
.fl-header .right-span{position: absolute;right: .4rem /* 30/75 */;top: .4rem /* 30/75 */;}
.fl-header .right-span i + i{margin-left: .67rem /* 50/75 */;}
.fl-header .right-span span{margin-right: .47rem /* 35/75 */;vertical-align: super;}
.fl-header i{display: inline-block;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;}
.menu{background: url('../../static/menu.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.back{background: url('../../static/back.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.weather{background: url('../../static/weather.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.left{background: url('../../static/left.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.right{background: url('../../static/right.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.search{background: url('../../static/search.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.close{background: url('../../static/close.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.check{background: url('../../static/check.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
.ellipses{background: url('../../static/ellipses.png') no-repeat center center;width: 100%;height: 100%;display: inline-block;}
</style>
