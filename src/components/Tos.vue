<template>
  <div class="index">
    <Header></Header>
    <div class="in">
      <div class="title">服务条款</div>
      <p>
        1.
        {{appname}}是一个纯中转在线服务。本服务不提供上传功能、且中转存储数据时长不超过48小时、并且不会修改任何内容。
      </p>
      <p>
        2.
        {{appname}}仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。
      </p>
      <p>
        3.
        任何由用户中转资讯、资料、文字、软件、音乐、音讯、照片、图形、视讯、信息、或其他资料（以下简称“内容”），均由用户对其使用行为自行承担责任。{{appname}}无法控制经由本服务传送之内容，也无法对用户的使用行为进行全面控制，因此不能保证内容的合法性、正确性、真实性或品质；用户已预知使用本服务时，可能会接触到令人不快、不适当等内容，并同意将自行加以判断并承担所有风险，而不依赖于{{appname}}提供的服务。
      </p>
      <p>
        4.
        若用户使用{{appname}}的行为不符合本协议，{{appname}}有权在无需事先通知用户的情况下立即终止向用户提供部分或全部服务。用户若通过{{appname}}散布和传播反动、色情或其他违反国家法律、法规的信息，{{appname}}的系统记录有可能作为用户违反法律法规的记录；因用户进行上述内容在{{appname}}平台传播而导致任何第三方提出索赔要求或衍生的任何损害或损失，由用户自行承担全部责任。
      </p>
      <p>
        5.
        {{appname}}仅供购买用户单独使用，严禁分享数据链接在任何公共地方，若由分享行为造成的过失、责任、因此造成触及法律等行为由分享者个人承担。
        此外，用户不得通过本中转平台下载任何违反违反宪法和法律行政法规的数据内容，因此造成的后果，{{appname}}会协助相关国家、部门追究处理。
      </p>
      <p>
        6.
        {{appname}}只会对文件启用中转，不会对文件有任何伪造、切割、加密、压缩解压等对数据的性质有改变的行为。
      </p>
      <p>
        7.
        因云多变因素(技术可行性、使用热度、存亡、服务质量等)，{{appname}}有权利对所支持的云替换或者删除等调整。
      </p>
      <p>
        本服务条款一经公布即生效，{{appname}}有权随时对协议内容进行修改。
        如果不同意{{appname}}服务条款，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受本服务条款。
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {
      accessToken: sessionStorage.getItem("accessToken"),
      switch1: false,
      tips: false,
      appname: "Sharecloud",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100%;
  min-height: 100%;
}
.in {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  font-size: 16px;
  color: #474747;
  padding: 30px;
  margin-top: 20px;
  line-height: 30px;
}
.in .title {
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
