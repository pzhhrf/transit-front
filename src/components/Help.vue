/*eslint-disable*/
<template>
  <div class="index">
    <Header></Header>
    <div class="in">
      <div class="in_01">常见问题</div>
      <div class="in_02">一、中转的服务流程：</div>
      <div class="in_03">
        用户提交文件链接 -> {{ appname }}提取文件信息 -> 用户确认中转 ->
        {{ appname }}服务器下载 -> 中转完毕生成下载链接 -> 用户下载
      </div>
      <div class="in_02">二、支持的 File Host 列表</div>
      <div class="in_03">支持列表以首页为主</div>
      <div class="in_02">三、是否支持Premium(高级会员/白金会员)文件的下载</div>
      <div class="in_03">
        支持，能否进行中转的唯一标准是在{{
          appname
        }}首页进行链接检测，检测成功(提示成功或添加至文件提取列表)即可中转。
      </div>
      <div class="in_02">四、文件有效期</div>
      <div class="in_03">
        文件有效期：48小时，无下载IP和下载次数限制。<br />
        流量有效期：永久有效，用完为止
      </div>
      <div class="in_02">五、文件转存失败</div>
      <div class="in_03">文件转存流量将自动返回</div>
      <div class="in_02">六、文件损坏、被加密或无法使用</div>
      <div class="in_03">
        {{ appname }}不会对中转的数据任何改动。用户可自行校验哈希值证明。<br />
        关于文件的准确性、有效性、真实度只能用户自己甄别。<br />
        此外，由于文件是由网络用户上传，若有解压密码等请联系咨询文件提供者，本站不可能知晓。
      </div>
      <div class="in_02">七、下载速度说明</div>
      <div class="in_03">
        {{ appname }} 服务器在海外,我们尽可能多的提供下载地址来加速内容的下载.
      </div>
      <div class="in_02">八、下载工具推荐</div>
      <div class="in_03">
        Windows系统推荐工具：<br />
        <a href="javascript:;">IDM下载</a>　<a href="javascript:;">NDM下载</a
        ><br />
        Mac系统推荐工具：<br />
        <a href="javascript:;">Aria2下载</a>　<a href="javascript:;">FDM下载</a>
        <br />
      </div>
      <div class="in_02">其他说明</div>
      <div class="in_03">
        1.本服务不修改任何内容。<br />
        2.关于文件的准确性、有效性、真实度自己甄别。<br />
        3.若有解压密码等请联系咨询文件提供者<br />
        4. 在完成中转后，文件保留48小时即自动删除。<br />
        5. 本站持续添加新的云支持。若请求支持某个云，可于QQ工作人员留言。<br />
        6. 流量的有效期：永久有效、用完为止
      </div>
      <div class="in_04" @click="index">
        <a href="javascript:;">返回首页</a>
      </div>
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
        path: "/index",
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
