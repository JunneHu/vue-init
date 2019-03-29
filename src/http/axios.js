import axios from "axios";
import qs from "qs";
import router from "../router/index";
import { Indicator } from "mint-ui";
import { Toast } from "vant";
import api from "./api";

const baseURL = api.baseURL;

axios.interceptors.request.use(
    config => {
        if (config.showLoading) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'snake'
            });
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.resolve(error.response);
    }
);

function errorState(response) {
    Indicator.close();
    // 如果http状态码正常，则直接返回数据
    if (
        response &&
        (response.status === 200 ||
            response.status === 304 ||
            response.status === 400)
    ) {
        Toast({
            message: "网络不给力",
            position: "bottom"
        });
        return response.data;
    } else {
        Toast({
            message: "网络不给力",
            position: "bottom"
        });
    }
}

function successState(response) {
    Indicator.close();
    //统一判断后端返回的错误码
    if (response.data.code == "0") {

    } else if (response.data.code == "1") {
        if (response.data.msg != 'token不能为空！') {
            Toast({
                message: response.data.msg || "网络不给力",
                position: "bottom"
            });
        }

    } else if (response.data.code == "2") {
        Toast({
            message: "登录信息已失效！",
            position: "bottom",
        });
        if (router.history.current.path != '/login') {
            router.push({
                path: "/login",
            });
        }

    } else {
        Toast({
            message: response.data.message
        });
    }
}

const httpServer = (opts, data) => {
    let Public = {
        //公共参数
        token: localStorage.getItem("token")
    };

    let httpDefaultOpts = {
        //http默认配置
        method: opts.method,
        baseURL: baseURL,
        url: opts.url,
        timeout: 60000,
        params: Object.assign(Public, data),
        data: qs.stringify(Object.assign(Public, data)),
        headers:
            opts.method == "get"
                ? {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8"
                }
                : {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
    };
    if (opts.method == "get") {
        delete httpDefaultOpts.data;
    } else {
        delete httpDefaultOpts.params;
    }
    httpDefaultOpts.showLoading = !(data && data.showLoading == '0')

    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts)
            .then(res => {
                successState(res);
                resolve(res.data);
            })
            .catch(response => {
                errorState(response);
                reject(response);
            });
    });
    return promise;
};

export default httpServer;
