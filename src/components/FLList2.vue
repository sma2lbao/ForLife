<template lang="html">
  <div class="list2">
    <i class="leftIcon" :class="left"></i>
    <p class="center">
      <span class="key">{{ keyV }}</span><br />
      <span class="val">{{ valV }}</span>
    </p>
    <i :class="right"></i>
  </div>
</template>

<script>
export default {
  name: 'FLList2',
  props: {
    left: {
      type: String,
      default: function () {
        return ''
      }
    },
    keyV: {
      type: String
    },
    valV: {
      type: String
    },
    right: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="css" scoped>
.list2{width: 100%;height: 2rem /* 150/75 */;padding: .53rem /* 40/75 */ .67rem /* 50/75 */;position: relative;background: url('../../static/divider.png') no-repeat bottom center;}
.leftIcon{display: inline-block;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;margin-right: .67rem /* 50/75 */;}
.center{height: .93rem /* 70/75 */;overflow: hidden;width: calc(100% - 3.33rem /* 250/75 */);display: inline-block;}
.key{font-size: .27rem /* 20/75 */;vertical-align: super;color: #fff;}
.val{font-size: .37rem /* 28/75 */;color: #999;}

.rightIcon{display: inline-block;position: absolute;top: .53rem /* 40/75 */;right: .67rem /* 50/75 */;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;background: url('../../static/right-small.png') no-repeat center center;background-size: auto !important;}
.downIcon{display: inline-block;position: absolute;top: .53rem /* 40/75 */;right: .67rem /* 50/75 */;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;background: url('../../static/right-small.png') no-repeat center center;-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-ms-transform: rotate(90deg);-o-transform: rotate(90deg);transform: rotate(90deg);background-size: auto !important;}
.pulsIcon{display: inline-block;position: absolute;top: .53rem /* 40/75 */;right: .67rem /* 50/75 */;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;background: url('../../static/plus.png') no-repeat center center;background-size: auto !important;}
.colorIcon{display: inline-block;position: absolute;top: .53rem /* 40/75 */;right: .67rem /* 50/75 */;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;background-color: #f36;border-radius: 50%;}

.user{background: url('../../static/user.png') no-repeat center center;}
.password{background: url('../../static/password.png') no-repeat center center;}
.email{background: url('../../static/email.png') no-repeat center center;}
.phone{background: url('../../static/phone.png') no-repeat center center;}
.address{background: url('../../static/address.png') no-repeat center center;}
.twitter{background: url('../../static/twitter.png') no-repeat center center;}
.calendar{background: url('../../static/calendar.png') no-repeat center center;}
.time{background: url('../../static/time.png') no-repeat center center;}
.location{background: url('../../static/location.png') no-repeat center center;}
.people{background: url('../../static/people-plus.png') no-repeat center center;}
.notice{background: url('../../static/notification.png') no-repeat center center;}
.droplet{background: url('../../static/droplet.png') no-repeat center center;}
</style>
