<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <loading class="loading"></loading>
    </div>
</template>

<script>
    import loading from './components/plugins/loading.vue';

    export default {
        components:{
            loading
        },
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
        +.loading {
            display: block;
        }
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        +.loading {
            display: block;
        }
    }

    .loading{
        display: none;
    }
</style>