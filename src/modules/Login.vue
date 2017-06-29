<template lang="html">
  <article class="">
    <div class="logo-bg">
      <img src="../../static/logo.png" class="logo" />
    </div>
    <section>
      <FLInput inputIcon="user" inputName="NAME" inputHolder="Enter name" v-model="user"/>
      <FLInput inputIcon="password" inputName="PASSWORD" inputHolder="Enter password" inputTip="Help" v-model="password"/>
      <FLBtn @click.native="login()" btnName="Sign In" style="margin-top: 1rem;" />
    </section>
    <p class="login-tip">DON'T HAVE AN ACCOUNT?&nbsp;<span @click="register()">SIGN UP</span></p>
  </article>
</template>

<script>
import FLInput from '../components/FLInput.vue'
import FLBtn from '../components/FLButton.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'login',
  components: {FLInput, FLBtn},
  data: function () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['SIGNIN']),
    async login () {
      let user = this.$data.user;
      let password = this.$data.password;
      let queryData = {
        user: user,
        password: password
      };
      try {
        var response = await this.$axios.get('/signin', {
          params: queryData
        });

        if(response.data.code == 1) {
          this.$router.push('Home');
          this.SIGNIN();
        }
        else{
          alert('用户名：Sma2lBao - 密码：000000');
        }
      } catch (e) {
        console.log(e);
      } finally {
        alert('登录成功');
        this.$router.push('Home');
        this.SIGNIN();
      }
    },
    register: function () {
      this.$router.push('SignUp');
    },

  },
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(loginStatu) {
      this.$router.push('Home');
    }
    else{
      this.$router.push('SignIn');
    }
  }

}
</script>

<style lang="css" scoped>
.logo-bg{width: 4rem /* 300/75 */;height: 4rem /* 300/75 */;margin: 0 auto;background-color: #8f97a1;border-radius: 50%;text-align: center;line-height: 4rem /* 300/75 */;margin-bottom: 2.4rem /* 180/75 */;margin-top: 16.5%;}
.logo{vertical-align: middle;}
.login-tip{color: #999;text-align: center;font-size: .27rem /* 20/75 */;margin-top: .8rem /* 60/75 */;}
.login-tip span{color: #fff;margin-left: .2rem /* 15/75 */;}
</style>
