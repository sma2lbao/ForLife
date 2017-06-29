<template lang="html">
  <article class="" style="height: 100%;">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" headText="Lists" rightIcon1="search" />

    <section>
      <div class="lists-bg">
        <span><i class="left-small"></i></span>
        <p>
          <span>Salads</span><br>
          <span>2/8</span>
        </p>
        <span><i class="right-small"></i></span>
      </div>
    </section>
    <section class="calcLstHei">
      <div v-for="(item, index) in salad" class="lists-ls" :class="item.statu ? 'check' : 'uncheck'" >
        <i :class="item.statu ? 'l-check' : 'l-uncheck'" @click="toggleStatu(item)"></i><span>{{ item.text }}</span>
      </div>
    </section>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'lists',
  components: {FLHead, },
  data: function () {
    return({
      salad: [{statu: false, text: '草莓'}, {statu: true, text: '苹果'}, {statu: true, text: '西瓜'}]
    })
  },
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
    toggleStatu: function (item) {
      item.statu = !item.statu
    }
  }
}
</script>

<style lang="css" scoped>
.lists-bg{height: 3.33rem /* 250/75 */;width: 100%;background-color: rgba(255, 255, 255, 0.15);text-align: center;position: relative;}
.lists-bg i{display: inline-block;width: .33rem /* 25/75 */;height: .33rem /* 25/75 */;}
.left-small{position: absolute;top: 50%;margin-top: -.17rem /* 12.5/75 */;left: .67rem /* 50/75 */;right: auto;}
.right-small{position: absolute;top: 50%;margin-top: -.17rem /* 12.5/75 */;right: .67rem /* 50/75 */;left: auto;}
.right-small{border-top: 1px solid #fff;border-right: 1px solid #fff;transform: rotate(45deg);}
.left-small{border-top: 1px solid #fff;border-left: 1px solid #fff;transform: rotate(-45deg);}
.lists-bg p{padding-top: .83rem /* 62.5/75 */;}
.lists-bg p span:first-child{font-size: .93rem /* 70/75 */;color: #fff;}
.lists-bg p span:last-child{font-size: .29rem /* 22/75 */;color: #fff;}
.lists-ls{height: 1.89rem /* 142/75 */;line-height: 1.87rem /* 140/75 */;width: 100%;padding: 0 .67rem /* 50/75 */;background: url('../../static/divider.png') no-repeat center bottom;font-size: .4rem /* 30/75 */;}
.lists-ls i{display: inline-block;width: .87rem /* 65/75 */;height: .87rem /* 65/75 */;vertical-align: middle;margin-right: .67rem /* 50/75 */;}
.l-check{background: url('../../static/l-check.png') no-repeat center center;}
.l-uncheck{background: url('../../static/l-uncheck.png') no-repeat center center;}
.lists-ls.check{color: #999;}
.lists-ls.uncheck{color: #fff;}
.calcLstHei{height: calc(100% - 5.07rem) /* 380/75 */;overflow: auto;}
</style>
