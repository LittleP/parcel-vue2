import Vue from 'vue'
import Router from 'vue-router'

const list = () => import('../components/pages/list.vue');
const detail = () => import('../components/pages/detail.vue');
Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: '/list'},
        {
            path: '/list',
            component: list,
            meta: { keepAlive: true }
        },
        {
            path: '/detail/:id',
            component: detail
        }
    ],
    // scrollBehavior (to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         if (from.meta.keepAlive) {
    //             from.meta.savedPosition = document.body.scrollTop;
    //         }
    //         return { x: 0, y: to.meta.savedPosition || document.body.scrollTop }
    //     }
    // }
})