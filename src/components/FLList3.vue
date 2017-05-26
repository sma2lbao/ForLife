<template lang="html">
  <div class="list3">
    <span class="leftText">{{ leftText }}</span>
    <i class="leftIcon" :class="left"></i>
    <p class="center">
      <span class="title">{{ title }}</span> <br />
      <span class="subTitle">{{ subTitle }}</span>
    </p>
    <i class="rightIcon" :class="right"></i>
  </div>
</template>

<script>
export default {
  name: 'FLList3',
  props: {
    left: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
.list3{width: 100%;height: 2.4rem /* 180/75 */;padding: .67rem /* 50/75 */ .67rem /* 50/75 */ .6rem /* 45/75 */ .67rem /* 50/75 */;background: url('../../static/divider.png') no-repeat bottom center;position: relative;}
.leftText{width: 1.33rem /* 100/75 */;display: inline-block;line-height: .8rem /* 60/75 */;height: 1.13rem /* 85/75 */;font-size: .35rem /* 26/75 */;color: #fff;}
.leftIcon{display: inline-block;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;margin-right: .67rem /* 50/75 */;margin-left: .67rem /* 50/75 */;vertical-align: top;}
.center{display: inline-block;height: 1.13rem /* 85/75 */;vertical-align: top;}
.title{font-size: .43rem /* 32/75 */;color: #fff;}
.subTitle{font-size: .35rem /* 26/75 */;color: #999;line-height: .67rem /* 50/75 */;}
.rightIcon{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;display: inline-block;border-radius: 50%;position: absolute;top: 50%;right: .67rem /* 50/75 */;margin-top: -.1rem /* 7.5/75 */;}
.rightWhiteIcon{background-color: #fff;}
.rightGreenIcon{background-color: #50d2c2;}
.rightPurpleIcon{background-color: #d667cd;}
</style>
