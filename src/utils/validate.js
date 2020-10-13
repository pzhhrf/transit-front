import Cookies from "js-cookie";

export function validEmail(value) {
    const reg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+.[a-z]+$/;
    if (value == '' || value == undefined || value == null) {
        return false
    } else {
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
}

export function validPassword(value) {
    return length(value) >= 6 && length(value) <= 20;
}

export function CheckLogin() {
    var info = Cookies.get("userinfo");
    if (info) {
        return JSON.parse(info);
    }
    return undefined
}