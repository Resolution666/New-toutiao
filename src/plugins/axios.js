import Vue from "vue";
import axios from 'axios';
import vm from "../main"
Vue.prototype.$axios = axios;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    vm.bLoading = true;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    vm.bLoading = false;
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
}
);

export default axios;