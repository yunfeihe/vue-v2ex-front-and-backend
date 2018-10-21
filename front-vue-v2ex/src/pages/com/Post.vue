<template>
    <div class="page-post">
        <panel-list class="post">
            <div class="list-item head">
                <div class="nav">V2EX  ›  程序员</div>
                <h1 class="title">{{ post.title }}</h1>
                <div class="info">{{ post.author }} · {{ post.time }}</div>
            </div>
            <div class="list-item content">{{ post.content }}</div>
        </panel-list>
    </div>
</template>

<script>
    const axios = require('axios');


    import Panel from '@com/Panel';
    import PanelList from '@com/PanelList';
    export default {
        components: {
            Panel,
            PanelList
        },
        data() {
            return {
                post: {},
            }
        },
        created() {
            axios.post('/api/v1/post/' + this.$route.params.id)
                .then((res) => {
                    const data = res.data;
                    this.post = data;
                }).catch((err) => {
                    console.log('err', err);
                });
        }
    }
</script>

<style lang="scss" scoped>
    .page-post {
        .post {
            .list-item {
                padding: 10px;
                border-bottom: 1px solid #e2e2e2;
                &:last-of-type {
                    border: none;
                }
            }
            .head {
                .nav {
                    font-size: 15px;
                    line-height: 120%;
                    text-align: left;
                    color: #778087;
                    margin-bottom: 10px;
                }
                .title {
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 150%;
                    margin: 0px 0px 10px 0px;
                }
                .info {
                    color: #999;
                    line-height: 120%;
                    text-align: left;
                    font-size: 12px;
                }
            }
            .content {
                font-size: 14px;
                line-height: 1.6;
                color: #000;
            }
        }
    }
</style>
