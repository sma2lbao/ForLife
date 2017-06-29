<template lang="html">
  <article style="height: 100%;">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" headText="Timeline" rightIcon1="search" />
    <aside class="calcHei">
      <section>
        <div class="title">
          <h1>WEDNESDAY,MARCH 18</h1>
        </div>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
      </section>
      <section>
        <div class="title">
          <h1>WEDNESDAY,MARCH 18</h1>
        </div>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
        <FLList3 left="birthday" leftText="All day" title="Birthday" subTitle="Mobile App" right="rightWhiteIcon"/>
      </section>
    </aside>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLList3 from '../components/FLList3.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'timeline',
  components: {FLHead, FLList3},
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
.title h1{background-color: #7e8794;height: 1.33rem /* 100/75 */;width: 100%;line-height: 1.33rem /* 100/75 */;text-indent: 2em;font-size: .29rem /* 22/75 */;font-weight: normal;color: #fff;}
.calcHei{height: calc(100% - 1.73rem) /* 130/75 */;width: 100%;overflow: auto;}
</style>
