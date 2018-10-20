<template>
    <panel-list class="main-content">
        <div class="list-item">
            <div class="tabs">
                <router-link 
                    :class="{
                        'tab-item': true,
                        active: tab.name === 'all',
                    }" 
                    v-for="(tab, index) in tabItems" 
                    :key="index" 
                    :to="{name: 'Index', query: {tab: tab.name}}"
                >{{ tab.title }}</router-link>
            </div>
            <div class="nodes">
                <router-link 
                    v-for="(node, index) in nodeItems" 
                    class="node-item"
                    :key="index" 
                    :to="{name: 'Index', query: {tab: node.name}}"
                >{{ node.title }}</router-link>
            </div>
        </div>
        <div class="posts">
            <div class="list-item post"
                v-for="post in postItems"
                :key="post.id"
            >
                <div class="avatar"><router-link :to="{name: 'Index'}"><img :src="post.member.avatar_large"></router-link></div>
                <div class="post-content">
                    <h4 class="post-title"><router-link :to="{name: 'Index'}">{{ post.title }}</router-link></h4>
                    <div class="post-info"><div class="src-node">{{ post.node.name }}</div>&nbsp;•&nbsp;<div class="author">post.member.name</div>&nbsp;•&nbsp;{{ post.last_modified }}&nbsp;•&nbsp;最后回复来自 <div class="last-reply-author">{{ post.last_reply_by }}</div></div>
                </div>
                <div class="reply-nums">{{ post.replies }}</div>
            </div>
        </div>
    </panel-list>
</template>

<script>
    const axios = require('axios');
    import PanelList from './PanelList.vue';
    export default {
        components: {
            PanelList,
        },
        data() {
            return {
                tabItems: [
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'all',
                        title: '全部',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                ],
                nodeItems: [
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                    {
                        name: 'foo',
                        title: '分享发现',
                    },
                ],
                postItems: [],
            }
        },
        created() {
            axios.get('/api/v1/posts.json?tab=all')
                .then(res => {
                    const data = res.data;
                    this.$data.postItems = data;
                    console.log('data', data);
                })
                .catch(err => {
                    console.log('err1', err);
                })
        }
    }
</script>

<style lang="scss" scoped>
    .main-content {
        .list-item {
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: none;
            }
        }
        .tabs {
            padding: 10px;
            .tab-item {
                text-decoration: none;
                width: 28px;
                height: 14px;
                padding: 5px 8px;
                margin-right: 5px;
                font-size: 14px;
                color: #555;
                border-radius: 3px;
                &.active {
                    background-color: #555;
                    color: #fff;
                }
            }
        }
        .nodes {
            height: 16px;
            padding: 10px 10px 10px 20px;
            background-color: #f9f9f9;
            .node-item {
                color: #778087;
                text-decoration: none;
                margin-right: 20px;
                font-size: 14px;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .posts {
            .post {
                position: relative;
                padding: 10px;
                padding-left: 20 + 48px;
                padding-right: 10 + 70px;
                .avatar {
                    // display: inline-block;
                    width: 48px;
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    img {
                        width: 100%;
                        border-radius: 4px;
                    }
                }
                .post-content {
                    .post-title {
                        margin-bottom: 5px;
                        a:active, a:link, a:visited {
                            color: #778087;
                            text-decoration: none;
                            word-break: break-all;
                            font-size: 16px;
                            line-height: 1.3;
                            text-shadow: 0 1px 0 #fff;
                        }
                        a:hover, a:active {
                            text-decoration: underline;
                        }
                    }
                    .post-info {
                        div {
                            display: inline-block;
                            vertical-align: bottom;
                        }
                        vertical-align: bottom;
                        font-size: 12px;
                        color: #ccc;
                        line-height: 200%;
                        .src-node {
                            background-color: #f5f5f5;
                            font-size: 12px;
                            line-height: 12px;
                            padding: 4px 4px 4px 4px;
                            border-radius: 2px;
                            text-decoration: none;
                            color: #999;
                            &:hover, &:active {
                                text-decoration: none;
                                background-color: #e2e2e2;
                                color: #777;
                            }
                        }
                    }
                }
                .reply-nums {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    line-height: 12px;
                    margin-top: -6px;
                    font-weight: 700;
                    color: #fff;
                    background-color: #aab0c6;
                    padding: 2px 10px 2px 10px;
                    border-radius: 12px;
                    text-decoration: none;
                    &:hover {
                        background-color: #969cb1;
                    }
                }
            }
        }
        
    }
</style>    
