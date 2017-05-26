<template lang="html">
  <article class="">
    <FLHead @listenLeft="close()" @listenIcon1="complete()" leftIcon="close" headText="Add New" rightIcon1="check" />
    <section class="newTitle">
      <input class="newName" type="text" name="" value="" placeholder="New Event"><br/>
      <input class="newSub" type="text" name="" value="" placeholder="DESCRIPTION">
    </section>
    <section>
      <FLList2 left="calendar" keyV="DATE" valV="March 25, 2015" right="downIcon" />
      <FLList2 left="time" keyV="TIME" valV="March 25, 2015" right="downIcon" />
      <FLList2 left="location" keyV="LOCATION" valV="March 25, 2015" />
      <FLList2 left="people" keyV="PEOPLE" valV="March 25, 2015" right="pulsIcon" />
      <FLList2 left="notice" keyV="NOTIFICATION" valV="March 25, 2015" right="pulsIcon" />
      <FLList2 left="droplet" keyV="LABEL COLOR" valV="March 25, 2015" right="colorIcon" />
    </section>
  </article>
</template>

<script>
import FLHead from '../components/FLHead.vue'
import FLList2 from '../components/FLList2.vue'
export default {
  name: 'addnew',
  components: {FLHead, FLList2},
  mounted: function () {
    const loginStatu = this.$store.state.isLogin;
    if(!loginStatu) {
        this.$router.push('SignIn');
    }
  },
  methods: {
    close: function () {
      this.$router.push('Home');
    },
    complete: function () {
      this.$router.push('Home');
    }
  }
}
</script>

<style lang="css" scoped>
.newTitle{height: 3.33rem /* 250/75 */;text-align: center;width: 100%;background-color: #7b8188;margin-bottom: .53rem /* 40/75 */;}
.newName{border: none;outline: none;font-size: .93rem /* 70/75 */;background-color: rgba(0, 0, 0, 0);color: #fff;text-align: center;width: 100%;margin-top: .93rem /* 70/75 */;}

.newSub{border: none;outline: none;font-size: .29rem /* 22/75 */;background-color: rgba(0, 0, 0, 0);color: #fff;text-align: center;width: 100%;margin-top: .4rem /* 30/75 */;}
::-webkit-input-placeholder { color: #fff;}
::-webkit-input-placeholder { color:#fff;}
:-moz-placeholder {color:#fff;}
::-moz-placeholder {color:#fff;}
:-ms-input-placeholder {color:#fff;}

.newSub::-webkit-input-placeholder { color: #999;}
.newSub::-webkit-input-placeholder { color:#999;}
.newSub:-moz-placeholder {color:#999;}
.newSub::-moz-placeholder {color:#999;}
.newSub:-ms-input-placeholder {color:#999;}
</style>
