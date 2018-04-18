<template>
    <div>
        <header class="header">
            <img src="../../images/1.jpg" />
            <span class="font-14px gray-9 m-l-5px p-r-5px">{{title}}</span>
            <span class="font-14px gray-9">2天</span>
        </header>
        <main>
            <h1 class="font-18px gray-2">快来看这个宇宙无敌的超级直播!</h1>
            <p class="font-14px gray-2 tips">ES6 箭头函数this指向 箭头函数有几个使用注意点。
                (1)函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象</p>
            <p class="bg-cover photo m-t-15px" v-bind:style="bgStyle"></p>
        </main>
    </div>
</template>

<script>
    import Img from '../../images/1.jpg';
    import Img2 from '../../images/2.jpg';
    export default {
        created() {
            this.$store.commit('show');
            console.log('detail');
        },
        computed: {
            bgStyle: function () {
                return {
                    'background-image': 'url("' + this.photo + '")'
                }
            }
        },
        data() {
            return {
                photo: Img,
                title: '黑行'
            }
        },
        mounted() {
            this.$store.commit('show');
            setTimeout(()=>{
                this.photo = Img2;
                this.$store.commit('hide');
            }, 1000);
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less">
    @import "../../css/page-normal";
    .header {
        padding: 10px;
        position: relative;
        &:after {
            .Pseudo-border-after();
        }
        img,span {
            vertical-align: middle;
            display: inline-block;
        }
        img {
            height: 20px;
            width: 20px;
            border-radius: 100px;
        }
    }
    main {
        padding: 0 15px;
        line-height: 1;
        h1 {
            padding: 15px 0;
        }
        .tips{
            line-height: 1.2;
        }
        .photo {
            height: 120px;
            width: 100%;
        }
    }

</style>