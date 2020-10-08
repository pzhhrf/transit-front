<template>
    <div class="login"></div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {};
    },
    created: function () {
        var th = this;
        th.openid = sessionStorage.getItem("openid");
    },
    computed: {
        isOk: function () {
            var th = this;
            if (th.mobile == "" || th.mobile == undefined) {
                return false;
            } else {
                if (th.mobile.length == 11) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    },
    methods: {
        ok: function () {
            var th = this;
            if (th.mobile == "") {
                alert("请填写手机号!");
                return false;
            } else {
                if (th.mobile.length != 11) {
                    alert("手机号不正确，请核实！");
                    return false;
                }
            }
            th.$router.push({
                path: "/login2",
                query: {
                    name: th.name,
                    number: th.number,
                    mobile: th.mobile,
                },
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    background: #495dc7;
    width: 100%;
    min-height: 100%;
}
</style>
