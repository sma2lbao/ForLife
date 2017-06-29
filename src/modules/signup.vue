<template lang="html">
  <article class="">
    <FLHead leftIcon="back" headText="Sign up" @listenLeft="listenLeft()" />
    <section>
      <div class="user-bg">
        <img :src="this.$store.state.userHeadPicture" alt="">
      </div>
    </section>
    <section>
      <FLInput v-model="username" inputIcon="user" inputName="NAME" inputHolder="Enter name"/>
      <FLInput v-model="email" inputIcon="email" inputName="EMAIL" inputHolder="Enter email"/>
      <FLInput v-model="password" inputIcon="password" inputName="PASSWORD" inputHolder="Enter password"/>
      <FLInput v-model="phone" inputIcon="phone" inputName="PHONE" inputHolder="Enter phone number"/>
    </section>
    <FLBtn btnName="Continue" @click.native="next()" style="margin-top: .93rem;" />
    <p class="sign-tip">ALREADY HAVE AN ACCOUNT<span @click="signin()">SIGN IN</span></p>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLInput from '../components/FLInput.vue'
import FLBtn from '../components/FLButton.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'signup',
  components: {FLHead, FLInput, FLBtn},
  data: function () {
    return {
      username: '',
      email: '',
      password: '',
      phone: ''
    };
  },
  methods: {
    ...mapMutations(['SIGNIN']),
    listenLeft: function () {
      this.$router.go(-1);
    },
    async next () {
      var data = {
        username: this.$data.username,
        email: this.$data.email,
        password: this.$data.password,
        phone: this.$data.phone
      };
      try {
        const response = await this.$axios.post('/signup', {
          data: data,
        });
        if(response.data.code == 1) {
          alert('注册成功');
          this.$router.push('Walk');
          this.SIGNIN();
        } else {
          alert('注册失败');
        }
      } catch (e) {

      } finally {
        alert('注册成功');
        this.$router.push('Walk');
        this.SIGNIN();
      }
    },
    signin: function () {
      this.$router.push('SignIn');
    }
  }
}
</script>

<style lang="css" scoped>
.user-bg{width: 2.47rem /* 185/75 */;height: 2.47rem /* 185/75 */;border-radius: 50%;margin: 0 auto;background-color: #000;margin-bottom: .67rem /* 50/75 */;}
.user-bg img{width: 2.47rem /* 185/75 */;height: 2.47rem /* 185/75 */;border-radius: 50%;}
.sign-tip{margin-top: .8rem /* 60/75 */;font-size: .27rem /* 20/75 */;color: #999;text-align: center;}
.sign-tip span{margin-left: .2rem /* 15/75 */;color: #fff;}
</style>
