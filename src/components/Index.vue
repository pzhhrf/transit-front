<template>
  <div class="index">
    <Header></Header>
    <div class="in_01">
      <div class="in01_01">全球云数据中转服务</div>
      <div class="in01_02">
        <div class="a01 li"><img src="../assets/i01.png" /> 提取链接</div>
        <div class="l01 li"><img src="../assets/i04.png" /></div>
        <div class="a02 li"><img src="../assets/i02.png" /> 添加中转</div>
        <div class="l01 li"><img src="../assets/i04.png" /></div>
        <div class="a03 li"><img src="../assets/i03.png" /> 取回本地</div>
      </div>
      <div class="in01_03">
        <textarea
          placeholder="请粘贴文件页面所在的链接，多个链接请隔行添加，不超过5个"
        >
        </textarea>
      </div>
      <div class="in01_04" @click="parseUrl">提取链接</div>
      <div class="in01_05">支持的云名称</div>
    </div>
    <div class="in_02">
      <div class="li01">
        <div v-for="item in sptData" :key="item.id">
          <div class="line">
            <div class="img"><img :src="item.icon" /></div>
            <div class="title">{{ item.display }}</div>
            <div class="des">{{ item.example }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="in_04">Copyright 2020</div>
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import request from "@/api/req.js";
export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {
      sptData: [],
      accessToken: sessionStorage.getItem("accessToken"),
    };
  },
  created() {
    this.getClouds();
  },
  methods: {
    getClouds() {
      request.getSupportCloud().then((res) => {
        if (res.code == 0) {
          this.sptData = res.data;
        }
      });
    },
    parseUrl() {
      this.$router.push({
        path: "/task",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100%;
  min-height: 100%;
}
.in_01 {
  width: 100%;
  height: 900px;
  margin: 0 auto;
  background: url(../assets/bg.png) no-repeat bottom;
}
.in01_01 {
  width: 950px;
  height: 170px;
  margin: 0 auto;
  color: #466ef5;
  font-size: 40px;
  text-align: center;
  line-height: 170px;
}
.in01_02 {
  width: 560px;
  height: 100px;
  margin: 0 auto;
}
.in01_02 .li {
  float: left;
  text-align: center;
  font-size: 16px;
  color: #909399;
  position: relative;
  line-height: 100px;
}
.in01_02 .l01 {
  width: 70px;
}
.in01_02 .a01 {
  width: 140px;
  cursor: pointer;
}
.in01_02 .a02 {
  width: 140px;
  cursor: pointer;
}
.in01_02 .a03 {
  width: 140px;
  cursor: pointer;
}
.in01_02 .a01 img {
  position: absolute;
  left: 15px;
  top: 43px;
}
.in01_02 .a02 img {
  position: absolute;
  left: 15px;
  top: 43px;
}
.in01_02 .a03 img {
  position: absolute;
  left: 15px;
  top: 43px;
}
.in01_03 {
  width: 950px;
  height: 220px;
  margin: 0 auto;
}
.in01_03 textarea {
  width: 892px;
  height: 162px;
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  padding: 28px;
  outline: none;
  font-size: 18px;
  font-weight: 100;
  color: #333333;
}
.in01_04 {
  width: 230px;
  height: 44px;
  background: #3251cf;
  color: #fff;
  text-align: center;
  line-height: 44px;
  margin: 0 auto;
  margin-top: 42px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.in01_05 {
  width: 950px;
  height: 240px;
  margin: 0 auto;
  text-align: center;
  line-height: 240px;
  font-size: 40px;
  color: #142655;
  margin-top: 100px;
}
.in_02 {
  width: 1002px;
  height: 570px;
  margin: 0 auto;
  margin-top: -35px;
}
.in_02 .li01 {
  width: 312px;
  height: 548px;
  float: left;
  margin: 0 10px;
  background: #fff;
  border: 1px solid #e2e7f0;
  border-radius: 10px;
  padding-top: 20px;
}
.in_02 .li01 .line {
  width: 312px;
  height: 60px;
  position: relative;
}
.in_02 .li01 .line .img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 30px;
  top: 20px;
}
.in_02 .li01 .line .img img {
  width: 20px;
  height: 20px;
}
.in_02 .li01 .line .title {
  width: 230px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 72px;
  top: 6px;
  color: #142655;
  font-size: 16px;
}
.in_02 .li01 .line .des {
  width: 230px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 72px;
  top: 24px;
  color: #8992aa;
  font-size: 12px;
}
.in_02 .li01 .line .version {
  width: 20px;
  height: 20px;
  color: #52c41a;
  text-align: center;
  padding: 0 10px;
  border: 1px solid #b7eb8f;
  background: #f6ffed;
  border-radius: 5px;
  position: absolute;
  left: 180px;
  top: 8px;
}
.in_03 {
  width: 942px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  line-height: 30px;
  padding-left: 60px;
  color: #474747;
  font-size: 12px;
  margin-top: 5px;
}
.in_03 .icon {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #52c41a;
  text-align: center;
  padding: 0 10px;
  border: 1px solid #b7eb8f;
  background: #f6ffed;
  border-radius: 5px;
  position: absolute;
  left: 10px;
  top: 4px;
}
.in_04 {
  width: 1002px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  margin-top: 100px;
  color: #474747;
  text-align: center;
}
.in_04 a {
  color: #474747;
}
.in_04 a:hover {
  color: #e80000;
}
</style>
