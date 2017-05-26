<template lang="html">
  <div class="fl-list1">
    <i class="leftIconPane" :class="leftIcon"></i>
    <p class="centerBody">
      <span>{{ centerTitle }}</span>
      <span>{{ centerSubTitle }}</span>
    </p>
    <span class="rightSpan">
      <span class="rightFont">{{ rightText }}</span>
      <span class="rightIconPane"><i :class="rightIcon"></i></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FLList1',
  props: {
    leftIcon: {
      type: String,
      default: function () {
        return ''
      }
    },
    rightIcon: {
      type: String,
      default: function () {
        return ''
      }
    },
    rightText: {
      type: String,
      default: function () {
        return ''
      }
    },
    centerTitle: {
      type: String,
      default: function () {
        return ''
      }
    },
    centerSubTitle: {
      type: String,
      default: function () {
        return ''
      }
    }
  },

}
</script>

<style lang="css" scoped>
.fl-list1{height: 2.4rem /* 180/75 */;width: 100%;background: url('../../static/divider.png') no-repeat bottom center;padding: .67rem /* 50/75 */;overflow: hidden;}
.leftIconPane{margin-right: .67rem /* 50/75 */;display: inline-block;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;vertical-align: top;}
.centerBody{display: inline-block;height: 1.07rem /* 80/75 */;overflow: hidden;}
.centerBody span:last-child{font-size: .35rem /* 26/75 */;color: #999;display: block;height: .4rem /* 30/75 */;}
.centerBody span:first-child{font-size: .43rem /* 32/75 */;color: #fff;display: inline-block;height: .53rem /* 40/75 */;}
.rightSpan{float: right;}
.rightFont{font-size: .35rem /* 26/75 */;height: 1.07rem /* 80/75 */;line-height: 1.07rem /* 80/75 */;display: inline-block;vertical-align: top;color: #fff;}
.rightIconPane{display: inline-block;height: 1.07rem /* 80/75 */;line-height: 1.07rem /* 80/75 */;vertical-align: top;}
.rightWhiteIcon{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;background-color: #fff;display: inline-block;border-radius: 50%;vertical-align: middle;margin-left: .27rem /* 20/75 */;}
.rightGreenIcon{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;background-color: #50d2c2;display: inline-block;border-radius: 50%;vertical-align: middle;margin-left: .27rem /* 20/75 */;}
.rightPurpleIcon{width: .2rem /* 15/75 */;height: .2rem /* 15/75 */;background-color: #d667cd;display: inline-block;border-radius: 50%;vertical-align: middle;margin-left: .27rem /* 20/75 */;}
.birthday{background: url('../../static/birthday.png') no-repeat center center;}
.food{background: url('../../static/food.png') no-repeat center center;}
.chat{background: url('../../static/chat.png') no-repeat center center;}
.mouse{background: url('../../static/mouse.png') no-repeat center center;}
</style>
