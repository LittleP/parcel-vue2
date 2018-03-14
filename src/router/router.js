import Vue from 'vue'
import Router from 'vue-router'

const list = () => import('../components/pages/list.vue');
Vue.use(Router);
export default new Router({
    routes: [
        { path: '/', redirect: '/list' },
        {
            path: '/list',
            component: list
        },
        {
            path: '/detail/:id',
            component: detail
        }
    ]
})