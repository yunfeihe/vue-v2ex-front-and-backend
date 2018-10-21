<template>
    <div class="page">
        <page-header></page-header>
        <div class="content">
            <div class="main-wrap">
                <div class="main">
                    <router-view name="main"></router-view>
                </div>
            </div>
            <div class="side-bar">
                <router-view name="side-bar"></router-view>
            </div>
        </div>
        <div class="sep-20"></div>
    </div>
</template>

<script>    
    const axios = require('axios');
    
    import PageHeader from './com/Header.vue';

    export default {
        components: {
            PageHeader,
        },
        created() {
            axios.post('/api/v1/isLogin')
                .then(res => {
                    const data = res.data;
                    if(data.isLogin = true) {
                        this.$store.commit('login', data.data);
                    }
                })
        },
    }
</script>

<style lang="scss" scoped>
    .page {
        $bg-color: #e2e2e2;
        div.sep-20 {
            height: 20px;
            // background-color: $bg-color;
        }
        background-color: $bg-color;
        background: linear-gradient(rgba(85, 85, 85, 0.5) 44px,rgba(0,0,0,.22) 46px, #e2e2e2 50px);
        min-height: 900px;
        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
        .content {
            margin: 0 auto;
            background-color: $bg-color;
            max-width: 1100px;
            min-width: 600px;
            box-sizing: border-box;
            margin-top: 20px;
            padding: 0 20px;
            overflow: hidden;
            .main-wrap, .side-bar {
                float: left;
            }
            $side-bar-width: 270px;
            .main-wrap {
                width: 100%;
                box-sizing: border-box;
                padding-right: $side-bar-width + 20px;
                .main {
                    min-height: 1px;
                }
            }
            .side-bar {
                margin-left: -$side-bar-width;
                width: $side-bar-width;
            }
        }
    }
</style>

