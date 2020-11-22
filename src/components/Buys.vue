/*eslint-disable*/
<template>
    <div class="index">
        <Header></Header>
        <div class="in">
            <el-form :model="pays">
                <el-form-item label="兑换码">
                    <el-input v-model="pays.code"></el-input>
                </el-form-item>
                <el-button
                    type="primary"
                    @click="activeRedeem(pays)"
                    :loading="isShowloading"
                    >兑换流量</el-button
                >
            </el-form>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import request from "@/api/req.js";
export default {
    name: "Index",
    components: {
        Header,
    },
    data() {
        return {
            isShowloading: false,
            pays: {
                code: "",
            },
            appname: "Sharecloud",
        };
    },
    created() {},
    methods: {
        activeRedeem(rows) {
            this.isShowloading = true;
            request
                .addRedeem(rows)
                .then((res) => {
                    this.isShowloading = false;
                    if (res.code == 0) {
                        this.$message("兑换成功!");
                        this.$router.push({
                            path: "/task",
                        });
                    } else {
                        this.$message(res.msg);
                    }
                })
                .catch((e) => {
                    console.log(e);
                    this.isShowloading = false;
                    this.$message("请求服务失败");
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
