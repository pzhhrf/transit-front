'use strict'

import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import { CheckLogin } from "@/utils/validate.js";

// const AJAX_VM = new Vue({}); // 创建一个空白vue组件用于调用tip组件的方法

let config = {
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000 * 30
    // withCredentials: true, // Check cross-site Access-Control
}

if (process.env.NODE_ENV === 'development') {
    config.headers.cookieDomain = location.hostname
}
const _axios = axios.create(config)

_axios.interceptors.request.use(

    function (config) {
        // Do something before request is sent
        var info = CheckLogin()
        if (info) {
            config.headers["C-USER"] = info.uid
            config.headers["C-TOKEN"] = info.token
        }
        // Do something before request is sent
        config.paramsSerializer = function (params) {
            return Qs.stringify(params, { arrayFormat: 'repeat' })
        }
        return config
    },
    function (error) {
        // Do something with request error
        if (error.request.status === 401) {
            window.location.href = window.location.origin + "/#/login";
            return;
        }
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        let data = response.data
        return Promise.resolve(data)
    },
    // eslint-disable-next-line
    function (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = window.location.origin + "/#/login";
            return;
        }
        return Promise.resolve({ code: error.response.code, message: error.response.message || '出错了' })
    }
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin
