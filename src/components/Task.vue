<template>
    <div class="index">
        <Header></Header>
        <div class="in">
            <div class="in_01">
                <div class="textarea">
                    <textarea
                        placeholder="请黏贴链接，多个链接隔行添加，不超过5个"
                        v-model="param.url"
                    ></textarea>
                </div>
                <div class="btn" @click="parseUrl">提取链接</div>
            </div>
            <div class="in_03">
                <!-- 客服工作时间： 周一至周五早上09:30至晚上23:00,
                周末10:00至22:00,其他时段请QQ留言，客服会尽快回复 -->
            </div>
            <div class="in_05">
                <div class="title">
                    <div class="span">文件提取列表</div>
                </div>
                <el-table
                    :key="tableKey"
                    v-loading="listLoading"
                    :data="parseData"
                    border
                    fit
                    highlight-current-row
                    style="width: 100%"
                >
                    <!-- <el-table-column label="序号" align="center" width="180">
                        <template slot-scope="{ row }">
                            <span>{{ row.id }}</span>
                        </template>
                    </el-table-column> -->
                    <el-table-column label="文件名" align="center">
                        <template slot-scope="{ row }">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="文件大小" align="center">
                        <template slot-scope="{ row }">
                            <span>{{ row.size | formatSize }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="提取状态"
                        align="center"
                        width="140"
                    >
                        <template slot-scope="{ row }">
                            <span>{{
                                row.status == 1 ? "提取成功" : "提取失败"
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="原始路径"
                        align="center"
                        width="150"
                    >
                        <template slot-scope="{ row }">
                            <span class="longtext">{{ row.url }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center"
                        class-name="small-padding fixed-width"
                    >
                        <template slot-scope="{ row }">
                            <el-button
                                type="primary"
                                size="mini"
                                v-if="row.status == 1"
                                @click="handleAddTask(row)"
                                >添加中转</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="in_06">
                <div class="title">
                    <div class="span">文件中转列表</div>
                </div>
                <div class="content">
                    <el-table
                        :key="tableKey"
                        v-loading="listLoading"
                        :data="downData"
                        border
                        fit
                        highlight-current-row
                        style="width: 100%"
                    >
                        <!-- <el-table-column label="序号" align="center">
                            <template slot-scope="{ row }">
                                <span>{{ row.id }}</span>
                            </template>
                        </el-table-column> -->
                        <el-table-column label="文件名" align="center">
                            <template slot-scope="{ row }">
                                <span>{{ row.down_name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="流量使用" align="center">
                            <template slot-scope="{ row }">
                                <span>{{ row.size | formatSize }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="转存进度" align="center">
                            <template slot-scope="{ row }">
                                <span>{{ row | formatStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="转存时间" align="center">
                            <template slot-scope="{ row }">
                                <span>{{
                                    row.complete_time | filterTime
                                }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="过期时间" align="center">
                            <template slot-scope="{ row }">
                                <span>{{ row.expire_time | filterTime }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="下载地址" align="center">
                            <template slot-scope="{ row }">
                                <span
                                    v-for="item in row.download_list"
                                    :key="item.id"
                                >
                                    <el-button
                                        type="primary"
                                        size="mini"
                                        v-clipboard:copy="item.msg"
                                        v-clipboard:success="onCopySuc"
                                        v-clipboard:error="onCopyErr"
                                        >线路{{ item.id }}</el-button
                                    >
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import request from "@/api/req.js";
import { formatDate } from "@/filter";
import { CheckLogin } from "@/utils/validate.js";
export default {
    name: "Task",
    components: {
        Header,
    },
    filters: {
        filterTime(str) {
            if (str == 0) {
                return "--";
            } else {
                return formatDate(str);
            }
        },
        formatStatus(row) {
            if (row.status == 3) {
                if (row.speedinfo) {
                    return row.speedinfo;
                } else {
                    return "--";
                }
            } else if (row.status == 4) {
                return "转存成功";
            } else if (row.status == 5) {
                return "转存失败";
            } else {
                return "--";
            }
        },
    },
    data() {
        return {
            tableKey: 0,
            accessToken: sessionStorage.getItem("accessToken"),
            switch1: false,
            param: {
                url: "",
            },
            listLoading: false,
            parseData: [],
            downData: [],
            timerList: [],
        };
    },
    created() {
        if (CheckLogin()) {
            this.getTasks();
        }
    },
    beforeDestroy() {
        this.timerList.forEach((element) => {
            clearInterval(element);
        });
    },
    methods: {
        parseUrl() {
            var array = new Array();
            array.push(this.param.url);
            let dict = {
                list: array,
            };
            request.parseUrl(dict).then((res) => {
                if (res.code == 0) {
                    this.parseData = res.data;
                } else {
                    alert("提取失败");
                }
            });
        },
        handleAddTask(row) {
            let dict = {
                id: row.id,
            };
            request.addTask(dict).then((res) => {
                if (res.code == 0) {
                    this.getTasks();
                } else {
                    alert("添加失败");
                }
            });
        },
        getTasks() {
            //获取任务
            let dict = {
                page: 1,
                limit: 10,
            };
            request.getTasks(dict).then((res) => {
                if (res.code == 0) {
                    this.downData = this.dealDownData(
                        res.data && res.data.content
                    );
                }
            });
        },
        getSpeedInfo(id) {
            var s = setInterval(() => {
                request.getSpeed({ id }).then((res) => {
                    if (res.code == 0) {
                        if (res.data.complete == "1") {
                            this.clearVal(s);
                        } else {
                            let info =
                                "速度:" +
                                res.data.speed +
                                " 进度:" +
                                res.data.percent +
                                "%";
                            this.dealTable(id, info);
                        }
                    }
                });
            }, 1000);
            this.timerList.push(s);
        },
        dealTable(id, info) {
            this.downData = this.downData.forEach((item) => {
                if (item.id == id) {
                    item.speedinfo = info;
                }
                return item;
            });
        },
        clearVal(sid) {
            clearInterval(sid);
            this.timerList = this.timerList.filter((item) => item !== sid);
        },
        dealDownData(tables) {
            if (tables) {
                tables.forEach((item) => {
                    if (item.status == 2 || item.status == 3) {
                        this.getSpeedInfo(item.id);
                    }
                });
                return tables;
            }
        },
        onCopySuc: () => {
            alert("复制成功");
        },
        onCopyErr: () => {
            alert("复制失败");
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
    width: 960px;
    height: auto;
    margin: 0 auto;
    padding: 100px 0;
}
.in_01 {
    width: 960px;
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
    font-size: 18px;
    font-weight: 100;
    color: #333333;
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
.longtext {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
