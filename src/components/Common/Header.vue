<template>
  <div class="header">
    <div class="mid">
      <div class="logo" @click="index"></div>
      <div class="menu">
        <div class="ul">
          <div class="li" @click="index">
            <a href="javascript:;">首页</a>
          </div>
          <div class="li" @click="task">
            <a href="javascript:;">任务列表</a>
          </div>
          <div class="li" @click="help">
            <a href="javascript:;">常见问题</a>
          </div>
          <div class="li" @click="contact">
            <a href="javascript:;">联系我们</a>
          </div>
        </div>
      </div>
      <div class="btns">
        <div class="loginBtn" @click="login">登录</div>
        <div class="reg" @click="reg">注册</div>
      </div>
    </div>
    <yd-popup v-model="showLogin" position="center" width="90%">
      <div class="login" ref="form-login">
        <div class="l01"></div>
        <div class="l02">
          <div class="t01">
            <div class="span">登录</div>
          </div>
          <div class="t02">邮箱</div>
          <div class="t03" prop="email">
            <div class="img">
              <img src="../../assets/i06.png" />
            </div>
            <input type="text" v-model="email" placeholder="请输入邮箱" />
          </div>
          <div class="t04">密码</div>
          <div class="t05" prop="password">
            <div class="img">
              <img src="../../assets/i07.png" />
            </div>
            <input
              type="password"
              v-model="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="t06" @click="addLogin">登录</div>
          <div class="t07">
            <a href="javascript:;" @click="tos" class="a01">服务条款</a>
            <a href="" class="a02">忘记密码</a>
          </div>
        </div>
        <div class="l03" @click="close(1)">×</div>
      </div>
    </yd-popup>

    <yd-popup v-model="showReg" position="center" width="90%">
      <div class="login reg" ref="form-reg">
        <div class="l01"></div>
        <div class="l02">
          <div class="t02">邮箱</div>
          <div class="t03">
            <input type="text" v-model="email" placeholder="请输入邮箱" />
          </div>
          <div class="t02">验证码</div>
          <div class="t03">
            <input type="text" v-model="code" placeholder="验证码" />
            <span @click="getCode">获取验证码</span>
          </div>
          <div class="t04">密码</div>
          <div class="t05">
            <input
              type="password"
              v-model="password"
              name=""
              placeholder="请输入密码"
            />
          </div>
          <div class="t04">确认密码</div>
          <div class="t05">
            <input
              type="password"
              v-model="password2"
              placeholder="请输入密码"
            />
          </div>
          <div class="t06" @click="addReg">注册</div>
          <div class="t07">
            <a href="" class="a01">服务条款</a>
            <a href="" class="a02">登录</a>
          </div>
        </div>
        <div class="l03" @click="close(2)">×</div>
      </div>
    </yd-popup>
  </div>
</template>

<script>
import request from "@/api/req.js";
import { validEmail, validPassword } from "@/utils/validate.js";
import md5 from "js-md5";
import Cookies from "js-cookie";
import moment from "moment";
export default {
  name: "Header",
  data() {
    return {
      showLogin: false,
      showReg: false,
      email: "",
      password: "",
      password2: "",
      code: "",
      rules: {
        email: [
          { required: true, message: "请输入邮箱" },
          { validator: validEmail, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码" },
          { validator: validPassword, trigger: "blur" },
        ],
      },
    };
  },
  props: [],
  created() {},
  methods: {
    task() {
      this.$router.push({
        path: "/task",
      });
    },
    help() {
      this.$router.push({
        path: "/help",
      });
    },
    contact() {
      var th = this;
      alert("contact");
    },
    index() {
      this.$router.push({
        path: "/",
      });
    },
    login() {
      this.showLogin = true;
    },
    reg() {
      this.showReg = true;
    },
    tos() {
      this.$router.push({
        path: "/tos",
      });
    },
    close(type) {
      if (type == 1) {
        this.showLogin = false;
      }
      if (type == 2) {
        this.showReg = false;
      }
    },
    addReg() {
      //注册
      let dict = {
        email: this.email,
        password: md5(this.password),
        code: this.code,
      };
      request.postReg(dict).then((res) => {
        if (res.code == 0) {
          this.setLoginData(res.data);
          this.$router.push({
            path: "/task",
          });
        } else {
          alert("注册失败");
        }
      });
    },
    addLogin() {
      //登陆
      let dict = {
        email: this.email,
        password: md5(this.password),
      };
      request.postLogin(dict).then((res) => {
        if (res.code == 0) {
          this.setLoginData(res.data);
          this.$router.push({
            path: "/task",
          });
        } else {
          alert("登陆错误");
        }
      });
    },
    setLoginData(data) {
      Cookies.set("userinfo", JSON.stringify(data), {
        expires: new Date(moment.unix(data.expire)),
      });
    },
    getCode() {
      //发送验证码
      let dict = {
        type: 1,
        email: this.email,
      };
      request.postSendCode(dict).then((res) => {
        if (res.code == 0) {
          alert("发送成功");
        } else {
          alert("发送失败");
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e0e5f1;
}
.header .mid {
  width: 1600px;
  height: 56px;
  margin: 0 auto;
  position: relative;
}
.header .mid .logo {
  width: 94px;
  height: 32px;
  background: url(../../assets/logo1.png) no-repeat center;
  position: absolute;
  left: 0;
  top: 12px;
  cursor: pointer;
}
.header .mid .menu {
  width: 520px;
  height: 56px;
  position: absolute;
  right: 200px;
  top: 0;
}
.header .mid .menu .ul {
  width: 520px;
  height: 56px;
}
.header .mid .menu .ul .li {
  width: 130px;
  height: 56px;
  float: left;
  text-align: center;
  line-height: 56px;
}
.header .mid .menu .ul .li a {
  color: #142655;
  font-size: 16px;
}
.header .mid .menu .ul .li a:hover {
  color: #e80000;
}
.header .mid .btns {
  width: 160px;
  height: 56px;
  position: absolute;
  right: 0;
  top: 0;
}
.header .mid .btns .loginBtn {
  width: 90px;
  height: 34px;
  background: #466ef5;
  border-radius: 5px;
  text-align: center;
  line-height: 34px;
  color: #fff;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 11px;
  cursor: pointer;
}
.header .mid .btns .reg {
  width: 50px;
  height: 34px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 34px;
  color: #474747;
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 11px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
}
.login {
  width: 370px;
  height: 480px;
  background: #fff;
  margin: 0 auto;
  border-radius: 5px;
  padding-top: 20px;
  position: relative;
}
.reg {
  height: 500px;
}
.login .l01 {
  width: 100%;
  height: 100px;
  background: url(../../assets/logo1.png);
}
.login .l02 {
  width: 280px;
  height: 360px;
  margin: 0 auto;
}
.login .l02 .t01 {
  width: 280px;
  height: 60px;
  border-bottom: 1px solid #eeeeee;
}
.login .l02 .t01 .span {
  width: 105px;
  height: 58px;
  border-bottom: 2px solid #325ff8;
  margin: 0 auto;
  color: #325ff8;
  font-size: 18px;
  text-align: center;
  line-height: 58px;
}
.login .l02 .t02 {
  width: 280px;
  height: 45px;
  margin-top: 10px;
  line-height: 45px;
  color: #142655;
}
.login .l02 .t03 {
  width: 280px;
  height: 35px;
  position: relative;
}
.login .l02 .t03 input {
  width: 240px;
  height: 28px;
  padding: 2px 10px 2px 30px;
  border: 1px solid #f0f0f0;
}
.login .l02 .t03 .img {
  width: 23px;
  height: 23px;
  position: absolute;
  left: 2px;
  top: 7px;
}
.login .l02 .t04 {
  width: 280px;
  height: 45px;
  margin-top: 10px;
  line-height: 45px;
  color: #142655;
}
.login .l02 .t05 {
  width: 280px;
  height: 35px;
  position: relative;
}
.login .l02 .t05 input {
  width: 240px;
  height: 28px;
  padding: 2px 10px 2px 30px;
  border: 1px solid #f0f0f0;
}
.login .l02 .t05 .img {
  width: 23px;
  height: 23px;
  position: absolute;
  left: 2px;
  top: 7px;
}
.login .l02 .t06 {
  width: 280px;
  height: 34px;
  background: #466ef5;
  color: #fff;
  text-align: center;
  line-height: 34px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.login .l02 .t07 {
  width: 280px;
  height: 40px;
  line-height: 40px;
  position: relative;
  margin-top: 20px;
}
.login .l02 .t07 .a01 {
  position: absolute;
  left: 0;
  top: 0;
  color: #466ef5;
}
.login .l02 .t07 .a02 {
  position: absolute;
  right: 0;
  top: 0;
  color: #466ef5;
}
.login .l03 {
  position: absolute;
  right: 15px;
  top: 0;
  color: #333;
  font-size: 30px;
  cursor: pointer;
}
</style>
