import Vue from 'vue'

export default {
    getSupportCloud() {
        return Vue.axios.get(`/api/v1/gate/clouds`)
    },
    postReg(params) {
        return Vue.axios.post(`/api/v1/gate/register`, JSON.stringify(params))
    },
    postSendCode(params) {
        return Vue.axios.post(`/api/v1/gate/send/code`, JSON.stringify(params))
    },
    forget(params) { //忘记密码
        return Vue.axios.post(`/api/v1/gate/forget`, JSON.stringify(params))
    },
    postLogin(params) {
        return Vue.axios.post(`/api/v1/gate/login`, JSON.stringify(params))
    },
    parseUrl(params) {
        return Vue.axios.post(`/api/v1/gate/parse`, JSON.stringify(params))
    },
    addTask(params) {
        return Vue.axios.post(`/api/v1/gate/add/task`, JSON.stringify(params))
    },
    delTask(params) {
        return Vue.axios.post(`/api/v1/gate/del/task`, JSON.stringify(params))
    },
    getTasks(params) {
        return Vue.axios.get(`/api/v1/gate/tasks`, { params })
    },
    getSpeed(params) {
        return Vue.axios.get(`/api/v1/gate/speed`, { params })
    },
    addRedeem(params) {
        return Vue.axios.post(`/api/v1/gate/add/redeem`, JSON.stringify(params))
    },
}