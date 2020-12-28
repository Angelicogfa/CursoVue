import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-cod3rs-default-rtdb.firebaseio.com/'
// axios.defaults.headers['Authorization'] = 'ABC';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-cod3rs-default-rtdb.firebaseio.com/',
            // headers: {
            //     'Authorization': "ABC",
            //     get: {
            //         'Accept': 'application/json'
            //     }
            // }
        });

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config);
            return config;
        }, error => Promise.reject(error));

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = [];

            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            // }

            // res.data = array
            return res;
        }, error => Promise.reject(error));
    }
});