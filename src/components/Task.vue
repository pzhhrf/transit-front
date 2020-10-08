<template>
    <div class="index">
        <Header></Header>
        <div class="in">
            <div class="in_01">
                <div class="textarea">
                    <textarea
                        placeholder="请黏贴文件页面所在的链接，多个链接请隔行添加，不超过5个"
                    ></textarea>
                </div>
                <div class="btn">提取链接</div>
            </div>
            <div class="in_02">
                近期速方云增加了对
                Filejoker、Filesmonster、Takefile、Hotlink、Ex-load、Novafile
                等支持，具体支持列表和倍率请参考首页
            </div>
            <div class="in_03">
                客服工作时间： 周一至周五早上09:30至晚上23:00,
                周末10:00至22:00，其他时段请QQ留言，客服会尽快回复
            </div>
            <div class="in_04">
                1. 请访问【使用教程】
                页面获取速方云推荐下载工具，尽量避免使用浏览器、迅雷(尤其是Mac系统)下载。<br />
                2. 近几日Uploadgig
                官方限制严格，可能支持不稳定，请尽量避免Uploadgig的使用。
            </div>
            <div class="in_05">
                <div class="title">
                    <div class="span">文件提取列表</div>
                    <div class="txt">提取完毕自动添加到中转队列</div>
                    <div class="more">
                        <yd-switch v-model="switch1"></yd-switch>
                    </div>
                </div>
                <div class="content">
                    <table cellspacing="1" cellpadding="1">
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="in_06">
                <div class="title">
                    <div class="span">文件中转列表</div>
                    <div class="txt" @click="tips = true">重要提示</div>
                </div>
                <div class="content">
                    <table cellspacing="1" cellpadding="1">
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                        <tr>
                            <td>序号</td>
                            <td>类型</td>
                            <td>文件名称</td>
                            <td>流量使用</td>
                            <td>提取状态</td>
                            <td>信息</td>
                        </tr>
                    </table>
                </div>
            </div>
            <yd-popup v-model="tips" position="center" width="90%">
                <div class="tips">
                    1. 为保持系统稳定性，同一时间中转的文件数请不要超过5个<br />
                    2. 下载链接有效期48小时，从中转完成时算起<br />
                    3.
                    请鼠标右键复制链接使用迅雷、IDM等下载工具下载，直接点击则使用浏览器下载<br />
                    4.
                    在本地下载未完成之前，勿删除任务，否则会导致本地下载文件不完整
                    <div class="close" @click="tips = false">×</div>
                </div>
            </yd-popup>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import request from "@/api/req.js";
export default {
    name: "Task",
    components: {
        Header,
    },
    data() {
        return {
            accessToken: sessionStorage.getItem("accessToken"),
            switch1: false,
            tips: false,
        };
    },
    created() {},
    methods: {
        getParseInfo() {},
        addCar: function () {},
        addLine: function () {},
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
    width: 1000px;
    height: auto;
    margin: 0 auto;
    padding: 100px 0;
}
.in_01 {
    width: 1000px;
    height: 160px;
    position: relative;
}
.in_01 .textarea {
    width: 820px;
    height: 160px;
    position: absolute;
    left: 0;
    top: 0;
}
.in_01 .textarea textarea {
    width: 780px;
    height: 120px;
    background: #fff;
    border: 1px solid #e2e7f0;
    padding: 20px;
    border-radius: 10px;
}
.in_01 .btn {
    width: 130px;
    height: 45px;
    background: #466ef5;
    color: #fff;
    position: absolute;
    right: 0;
    top: 57px;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}
.in_02 {
    width: 980px;
    height: 40px;
    line-height: 40px;
    background: #b7eb8f;
    margin-top: 10px;
    opacity: 0.8;
    color: #474747;
    padding-left: 20px;
}
.in_03 {
    width: 1000px;
    height: 60px;
    line-height: 60px;
    color: #d8236e;
    text-align: center;
}
.in_04 {
    width: 988px;
    height: 38px;
    border: 1px solid #ffe58f;
    line-height: 20px;
    font-size: 12px;
    padding: 10px 5px;
    background: #fffbe6;
    color: #474747;
}
.in_05 {
    width: 1000px;
    height: auto;
    margin-top: 20px;
}
.in_05 .title {
    width: 1000px;
    height: 30px;
    border-left: 2px solid #466ef5;
    position: relative;
    line-height: 30px;
}
.in_05 .title .span {
    color: #466ef5;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    left: 10px;
    top: 0;
}
.in_05 .title .txt {
    color: #8992aa;
    font-size: 14px;
    position: absolute;
    right: 60px;
    top: 0;
}
.in_05 .title .more {
    color: #8992aa;
    font-size: 14px;
    position: absolute;
    right: 0px;
    top: 0;
}
.in_05 .content {
    width: 1000px;
    height: auto;
    margin-top: 10px;
}
.in_05 .content table {
    background: #fff;
    width: 100%;
    color: #8d8f94;
    background: #8d8f94;
}
.in_05 .content table tr td {
    padding: 5px;
    background: #fff;
    text-align: center;
}
.in_06 {
    width: 1000px;
    height: auto;
    margin-top: 20px;
}
.in_06 .title {
    width: 1000px;
    height: 30px;
    border-left: 2px solid #466ef5;
    position: relative;
    line-height: 30px;
}
.in_06 .title .span {
    color: #466ef5;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    left: 10px;
    top: 0;
}
.in_06 .title .txt {
    color: #faad14;
    font-size: 16px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}
.in_06 .content {
    width: 1000px;
    height: auto;
    margin-top: 10px;
}
.in_06 .content table {
    background: #fff;
    width: 100%;
    color: #8d8f94;
    background: #8d8f94;
}
.in_06 .content table tr td {
    padding: 5px;
    background: #fff;
    text-align: center;
}
.tips {
    width: 400px;
    height: 200px;
    margin: 0 auto;
    line-height: 30px;
    color: #474747;
    background: #fff;
    padding: 40px 20px 10px 20px;
    position: relative;
    border-radius: 5px;
}
.tips .close {
    position: absolute;
    right: 10px;
    top: 0;
    color: #333;
    font-size: 30px;
    cursor: pointer;
}
</style>
