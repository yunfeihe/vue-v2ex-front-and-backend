<template>
    <div class="page">
        <page-header></page-header>
        <div class="content">
            <div class="main-wrap">
                <div class="main">
                    <main-content></main-content>
                </div>
            </div>
            <div class="side-bar">
                <login/>
                <div class="sep-20"></div>
                <hot-topic></hot-topic>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from './com/Header.vue';
    import HotTopic from './com/HotTopic.vue';
    import Login from './com/Login.vue';
    import MainContent from './com/MainContent.vue';
    export default {
        components: {
            PageHeader,
            HotTopic,
            Login,
            MainContent,
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        $bg-color: #e2e2e2;
        div.sep-20 {
            height: 20px;
            background-color: $bg-color;
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
                    background-color: red;
                }
            }
            .side-bar {
                margin-left: -$side-bar-width;
                width: $side-bar-width;
                background-color: white;
                >div {
                    
                }
            }
        }
    }
</style>

