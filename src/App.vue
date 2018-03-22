<template>
    <div>

        <transition name="page" mode="out-in">
            <keep-alive include="list">
                <router-view  v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="detail" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <loading v-show="loadShow"></loading>
    </div>
</template>

<script>
    import loading from './components/plugins/loading.vue';

    export default {
        components:{
            loading
        },
        computed: {
            loadShow() {
                return  this.$store.state.loading.status
            }
        },
        methods: {
            leave() {
                console.log('leave',status);
                this.$store.commit('show');
            },
            enter() {
                console.log('enter',status);
                this.$store.commit('hide');
            }
        },
        mounted() {
        }
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    .page-leave-active{
        transition: opacity .3s linear;
    }
    .page-leave-to {
        opacity: .5;
    }

    .page-enter-active{
        transition: opacity .3s linear;
        opacity: .3;
    }
    .page-enter-to {
        transition: opacity .3s linear;
        opacity: .5;
    }

    .detail-leave-active{
        opacity: 0;
    }
    .detail-leave-to {
        opacity: 0;
    }

    .detail-enter-active{
        transition: opacity .3s linear;
        opacity: 0;
    }
    .detail-enter-to {
        transition: opacity .3s linear;
        opacity: 0;
    }
</style>