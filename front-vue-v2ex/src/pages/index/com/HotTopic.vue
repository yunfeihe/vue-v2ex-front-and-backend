<template>
    <div class="hot-topic">
        <panel-list>
            <div class="list-item title">
                <h2 class="panel-title">{{ title }}</h2>
            </div>
            <div class="list-item topic" v-for="topic in topicItems" :key="topic.id">
                <div class="avatar"><img :src="topic.member.avatar_mini" alt=""></div>
                
                <h3 class="topic-title"><router-link :to="topic.url">{{ topic.title }}</router-link></h3>
            </div>
        </panel-list>
    </div>
</template>

<script>
    const axios = require('axios');

    import PanelList from '../../common/com/PanelList.vue';

    export default {
        components: {
            PanelList
        },
        data() {
            return {
                title: '今日热议主题',
                topicItems: [],
            };
        },
        created() {
            axios.get('http://localhost:8080/static/mock/hot.json')
                .then(res => {
                    const data = res.data;
                    this.$data.topicItems = data;
                })
                .catch(err => {
                    console.log('err', err);
                })
        }
    }
</script>

<style lang="scss" scoped>
    .hot-topic {
        .list-item {
            font-size: 14px;
            line-height: 1.2;
            padding: 10px;            
            position: relative;
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: none;
            }
        }

        .title {
            color: #ccc;
        }

        .topic {
            padding-left: 20 + 24px;
            .topic-title {
                display: inline-block;
                a {
                    text-decoration: none;
                    color: #778087;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .avatar {
                position: absolute;
                top: 50%;
                left: 10px;
                height: 24px;
                width: 24px;
                margin-top: -12px;
            }
        }
    }
</style>
