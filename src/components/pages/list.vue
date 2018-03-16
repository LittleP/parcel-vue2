<template>
    <div>
        <list-loader v-bind:list="items"></list-loader>
        <section class="list" v-for="item in items" @click="goDetail(item)">
            <img src="../../images/1.jpg" class="img-block" />
            <div class="img-right-side">
                <h1 class="font-17px ellipsis gray-2 line-height-1">快来看这个宇宙无敌的超级直播!</h1>
                <p class="p-t-10px tips">
                    <img class="m-r-5px" src="../../images/2.jpg" />
                    <span class="m-r-10px font-14px gray-9">大佬</span>
                    <i class="point"></i>
                    <span class="m-l-10px font-14px gray-9">超级金牌讲师</span>
                </p>
                <p class="m-t-20px line-height-1">
                    <span class="font-14px gray-9">1240人参与</span>
                    <span class="pull-right font-14px orange">预计45分钟</span>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import listLoader from './list-loader.vue';
    export default {
        name: 'list',
        components: {
            listLoader: listLoader,
            props: ['list'],
        },
        created() {
            this.items = [
                {id:1}, {id:2}, {id:3}
            ];
            console.log('list');
        },
        mounted() {
//            console.log(123,this.$store.mutations.loading);
//            this.$store.mutations.loading.commit('show');

//            setTimeout(()=>{this.$store.commit('hide');}, 2000);

        },
        data() {
            return {
                parentMessage: 'Parent',
            }
        },
        methods: {
            goDetail: function(item) {
                this.$router.push('/detail/' + item.id);
            }
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less">

</style>