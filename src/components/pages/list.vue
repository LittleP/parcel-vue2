<template>
    <section class="list">
        <img src="../../images/1.jpg" class="img-block" />
        <div class="img-right-side">
            <h1 class="font-17px ellipsis">哈哈哈行昂昂昂哈哈哈行昂昂昂哈哈哈行昂昂昂哈哈哈行昂昂昂哈哈哈行昂昂昂</h1>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {

        },
        data() {
            return {
                name: 'aaa'
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../css/utilities/tools.less";
    @import "../../css/utilities/font-px.less";

    .list{
        margin-left: 15px;
        padding: 15px 15px 15px 0;
        .img-block{
            width: 115px;
            height: 80px;
            margin-right: 15px;
            display: inline-block;
            vertical-align: middle;
        }
        .img-right-side{
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 145px);
        }
    }

</style>