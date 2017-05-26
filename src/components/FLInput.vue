<template lang="html">
  <div class="fl-input">
    <i :class="inputIcon"></i>
    <div class="input-body">
      <span>{{ inputName }}</span><input :type="inputName.toLowerCase() == 'password' ? 'password' : 'text'" :placeholder="inputHolder" ref="input" :value="value" v-on:input="update($event.target.value)">
    </div>
    <span class="input-tip">{{ inputTip }}</span>
  </div>
</template>

<script>

export default {
  name: 'fl-input',
  props: {
    inputIcon: {
      type: String,
      default: function () {
        return ''
      }
    },
    inputName: {
      type: String,
      default: function () {
        return ''
      }
    },
    inputHolder: {
      type: String,
      default: function () {
        return 'Input Here'
      }
    },
    inputTip: {
      type: String,
      required: false
    },
    value: {
      type: String,
    }
  },
  data: function () {
    return {
      val: 'Input Here',

    }
  },
  methods: {
    update: function (value) {
      this.$refs.input.value = value;
      this.$emit('input', value);
    }
  }
}
</script>

<style lang="css" scoped>
  * {font-size: .27rem /* 20/75 */;}
  .fl-input{overflow: hidden;height: 2rem /* 150/75 */;width: 100%;position: relative;padding: .53rem /* 40/75 */ .67rem /* 50/75 */;background: url('../../static/divider.png') no-repeat bottom center;}
  .fl-input i{float: left;width: .67rem /* 50/75 */;height: .67rem /* 50/75 */;margin-right: .67rem /* 50/75 */;}
  .input-body span{position: absolute;top: .53rem /* 40/75 */;left: 2rem /* 150/75 */;color: #fff;}
  .input-body input{float: left;height: .8rem /* 60/75 */;line-height: .8rem /* 60/75 */;border: none;background-color: rgba(0, 0, 0, 0);position: absolute;bottom: .2rem /* 15/75 */;left: 2rem /* 150/75 */;right: .67rem /* 50/75 */;font-size: .37rem /* 28/75 */;color: #fff;width: calc(100% - 4rem /* 300/75 */);outline: none;padding-left: 1px;}
  .input-tip{position: absolute;color: #949298;bottom: .53rem /* 40/75 */;right: .67rem /* 50/75 */;font-size: .35rem /* 26/75 */;}
  ::-webkit-input-placeholder { color: #989898;}
  ::-webkit-input-placeholder { color:#989898;}
  :-moz-placeholder {color:#989898;}
  ::-moz-placeholder {color:#989898;}
  :-ms-input-placeholder {color:#989898;}
  .user{background: url('../../static/user.png') no-repeat center center;}
  .password{background: url('../../static/password.png') no-repeat center center;}
  .email{background: url('../../static/email.png') no-repeat center center;}
  .phone{background: url('../../static/phone.png') no-repeat center center;}
</style>
