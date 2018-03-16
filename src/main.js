import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import './css/common.less';

Vue.config.productionTip = false;
Vue.config.debug = true;

new Vue({
    router,
    store,
    render (h) {
        return h(App)
    }
}).$mount('#app');