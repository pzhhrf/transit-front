<template>
    <div class="index">
        授权成功,正在跳转中...
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data () {
        return {
            openid: ''
        }
    },
    created: function(){
        var th = this;
        if(th.$route.query.login == 0) //本openid未注册，跳转注册。
        {
            th.openid = th.$route.query.openid;
            sessionStorage.setItem("openid", th.$route.query.openid);
            window.location.href = th.Common.myUrl + 'login';
        }
        if(th.$route.query.login == 1) //本openid已注册,并且只绑定了一个客户
        {
            sessionStorage.setItem("accessToken", th.$route.query.accessToken);
            th.$router.push({path: '/'});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{background: #fff;width:100%;height: 100%;}
</style>
