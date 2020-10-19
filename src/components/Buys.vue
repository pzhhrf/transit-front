/*eslint-disable*/
<template>
  <div class="index">
    <Header></Header>
    <div class="in">
      
    </div>
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {
      appname: "Sharecloud",
    };
  },
  created() {},
  methods: {
    index: function () {
      var th = this;
      th.$router.push({
        path: "/",
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
.in {
  width: 820px;
  height: auto;
  background: #fff;
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px 90px;
}
.in_01 {
  width: 800px;
  height: 45px;
  font-size: 28px;
  color: #466ef5;
  border-left: 4px solid #466cf5;
  padding-left: 20px;
  font-weight: bold;
}
.in_02 {
  width: 820px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #466ef5;
}
.in_03 {
  width: 820px;
  line-height: 30px;
  font-size: 14px;
  color: #474747;
}
.in_03 a {
  color: #466ef5;
  margin: 10px;
}
.in_04 {
  width: 820px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  text-align: center;
}
.in_04 a {
  color: #466ef5;
  font-size: 20px;
}
</style>
