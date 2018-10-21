<template>
    <panel-list class="new-post">
        <div class="list-item nav">V2EX  ›  创作新主题</div>
        <div class="list-item title">主题标题</div>
        <div class="list-item post-title"><input type="text" v-model="postTitle" class="post-title-content" placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"></div>
        <div class="list-item desc">正文</div>
        <div class="list-item editor">
            <textarea v-model="postContent"></textarea>
        </div>
        <div class="list-item select-node">
        <select id="node-select" v-model="node">
            <option disabled>请选择一个节点</option>
            <option v-for="(node, index) in nodes" :selected="index === 0 ? 'selected' : ''" :key="node.id" :value="node.name">{{ node.title }}</option>
        </select>
        </div>
        <div class="list-item submit">
            <btn @click="newPost" :width="90" :height="28" :font-size="14" >发表</btn>
        </div>
    </panel-list>
</template>

<script>
    const axios = require('axios');

    import PanelList from '@com/PanelList';
    import Btn from '@com/Btn';
    
    export default {
        components: {
            PanelList,
            Btn,
        },
        data() {
            return {
                postTitle:'',
                postContent: '',
                node: '',
                nodes:[],
            }
        },
        methods: {
            newPost(evt) {
                axios.post('/api/v1/new-post', {
                    postTitle: this.$data.postTitle,
                    postContent: this.$data.postContent,
                    author: this.$store.state.username,
                    node: this.$data.node,
                }).then(res => {
                    const data = res.data;
                    console.log('res', res);
                    if(res.status === 200) {
                        this.$router.push({
                            path: '/post/' + data.postId,
                        });
                    }
                }).catch(err => {
                    console.log('err', err);
                })
            },
        },
        created() {
            axios.post('/api/v1/nodes')
                .then(res => {
                    const nodes = res.data;
                    this.$data.nodes = nodes;
                }).catch(err => {
                    console.log('err', err);
                })
        }
    }
</script>

<style lang="scss" scoped>
    .new-post {
        .list-item {
            padding: 10px;
            font-size: 14px;
            line-height: 120%;
            text-align: left;
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: none;
            }
        }
        .post-title {
            background-color: rgb(247, 247, 247);
            input {
                width: 100%;
                font-size: 14px;
                border: none;
                outline: none;
                background-color: rgb(247, 247, 247);
            }
        }

        .editor {
            height: 300px;
            textarea {
                font-size: 14px;
                height: 100%;
                width: 100%;
                border: none;
                outline: none;
                background-color: rgb(247, 247, 247);
                resize: none;
            }
        }
    }
</style>
