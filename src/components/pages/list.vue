<template>
    <div>
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
    export default {
        mounted() {
        },
        data() {
            return {
                parentMessage: 'Parent',
                items: [
                    {id:1},
                    {id:2},
                    {id:3}
                ]
            }
        },
        methods: {
            goDetail: function(item) {
                console.log(this.$router);
                this.$router.push('/detail/' + item.id);
            }
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less">
    @import "../../css/page-normal";
    .list:first-child {
        &:before {
          display: none;
        }
    }
    .list{
        margin-left: 15px;
        padding: 15px 15px 15px 0;
        position: relative;
        &:before {
            .Pseudo-border-before();
        }

        .img-block {
            width: 115px;
            height: 80px;
            margin-right: 15px;
            display: inline-block;
            vertical-align: top;
        }
        .img-right-side {
            display: inline-block;
            vertical-align: top;
            width: calc(100% - 145px);
        }
        .tips{
            span,img,i {
                display: inline-block;
                vertical-align: middle;
                line-height: 1;
            }
            img {
                width: 20px;
                height: 20px;
                border-radius: 100px;
            }
            .point {
                width:3px;
                height:3px;
                background:rgba(221,221,221,1);
                border-radius: 100px;
            }
        }

    }

</style>