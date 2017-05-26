<template lang="html">
    <button type="button">{{ btnName }}</button>
</template>

<script>
export default {
  name: 'FLBtn',
  props: {
    btnName: {
      default: 'button'
    }
  }
}
</script>

<style lang="css" scoped>
  button{font-size: .37rem /* 28/75 */;margin: 0 .67rem /* 50/75 */;width: calc(100% - 1.33rem /* 100/75 */);height: 1.47rem /* 110/75 */;line-height: 1.47rem /* 110/75 */;border-radius: .73rem /* 55/75 */;border: .03rem /* 2/75 */ solid #fff;background-color: rgba(0, 0, 0, 0);color: #fff;outline: none;}
</style>
