import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './css/common.less';

Vue.config.productionTip = false;

new Vue({
    router,
    render (h) {
        return h(App)
    }
}).$mount('#app');