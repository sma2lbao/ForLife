<template lang="html">
  <article class="">
    <FLHead @listenLeft="showMenu()" leftIcon="menu" headText="Settings" rightIcon1="search" />
    <section class="head-bg">
      <div class="img-bg">
        <i class="i-camera"></i>
      </div>
      <div class="img-bg">
        <img :src="this.$store.state.userHeadPicture" alt="">
      </div>
      <div class="img-bg" @click="logout()">
        <i class="i-logout"></i>
      </div>
    </section>
    <section>
      <FLList2 left="user" keyV="NAME" valV="李观保" right="" />
      <FLList2 left="email" keyV="EMAIL" valV="sma2lbao@qq.com" right=""  />
      <FLList2 left="password" keyV="PASSWORD" valV="Sma2lBao" right=""  />
      <FLList2 left="phone" keyV="PHONE" valV="176-0581-2021" right=""  />
      <FLList2 left="address" keyV="ADDRESS" valV="杭州市-滨江区-长江西苑" right=""  />
      <FLList2 left="twitter" keyV="TWIRRER" valV="Sma2lBao" right=""  />
    </section>
  </article>
</template>

<script>
import FLHead from  '../components/FLHead.vue'
import FLList2 from  '../components/FLList2.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'setting',
  components: {FLHead, FLList2},
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
        this.$router.push('SignIn');
    }
  },
  methods: {
    ...mapMutations(['TOGGLEMENU', 'SIGNOUT']),
    showMenu: function () {
      this.TOGGLEMENU();
    },
    logout: function () {
      this.SIGNOUT();
      this.$router.push('SignIn');
    }
  }
}

</script>

<style lang="css" scoped>
.head-bg{height: 3.73rem /* 280/75 */;width: 100%;background-color: #86909b;opacity: 0.95;padding-top: .87rem /* 65/75 */;text-align: center;}
.img-bg{width: 2rem /* 150/75 */;height: 2rem /* 150/75 */;border-radius: 50%;background-color: #969ca4;display: inline-block;overflow: hidden;}
.img-bg + .img-bg{margin-left: .87rem /* 65/75 */;}
.i-camera{background: url('../../static/camera.png') no-repeat center 40%;display: inline-block;width: .8rem /* 60/75 */;height: 100%;}
.i-logout{background: url('../../static/logout.png') no-repeat center center;display: inline-block;width: .8rem /* 60/75 */;height: 100%;}
.img-bg img{width: 100%;height: 100%;outline: none;border: none;}
</style>
