<template>
    <div :class="['login', this.$store.state.isLogin ? 'person-info' : '']">
        <panel-list v-if="!this.$store.state.isLogin">
            <div class="list-item title">
                <h2 class="panel-title">{{ title }}</h2>
                <div class="desc">{{ desc }}</div>
            </div>
            <div class="list-item login-part">
                <router-link :to="{name: 'Register'}" tag="div" class="center-wrap"><btn :width="74" :height="28">现在注册</btn></router-link>
                <div class="other">已注册用户请 <router-link class="login-link" :to="{name: 'Login'}">登陆</router-link></div>
            </div>
        </panel-list>
        <panel-list v-if="this.$store.state.isLogin">
            <div class="list-item head">
                <span class="head_img"><img :src="this.$store.state.head_url"></span>
                <span class="username"><router-link :to="'/user/' + this.$store.state.username">{{ this.$store.state.username }}</router-link></span>
            </div>
            <div class="list-item new-post">
                <span class="new-post-icon"><router-link to="/post/new">创建新主题</router-link></span>
            </div>
        </panel-list>
    </div>
</template>

<script>
    import PanelList from './PanelList';
    import Btn from './Btn.vue';

    export default {
        components: {
            PanelList,
            Btn,
        },
        props: {
            isLogin: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                title: 'V2EX = way to explore',
                desc: 'V2EX 是一个关于分享和探索的地方',
            }
        }    
    }
</script>

<style lang="scss" scoped>
    .login {
        .list-item {
            font-size: 14px;
            line-height: 1.2;
            padding: 10px;            
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: none;
            }
        }

        .title {
            .panel-title {
                font-weight: bold;
                line-height: 1.2;
                margin-bottom: 5px;
            }
            .desc {
                color: #ccc;
            }
        }
        .login-part {
            .center-wrap {
                margin: 0 auto;
                width: 74px;
                margin-bottom: 10px;
            }
            .other {
                text-align: center;
                a {
                    text-decoration: none;
                    color: #778087;
                    &:active, &:hover {
                        color: #4d5256;
                        text-decoration: underline;
                    }
                }
            }
        }

        
    }

    .person-info {
        a {
            color: #778087;
            font-size: 14px;
            text-decoration: none;
            &:hover, &:active {
                color: #4d5256;
                text-decoration: underline;
            }
        }
        .head {
            padding: 10px;
            .head_img {
                margin-right: 10px;
                width: 48px;
                height: 48px;
                display: inline-block;
                img {
                    width: 100%;
                }
            }
            .username {
                display: inline-block;
                height: 48px;
                line-height: 48px;
                vertical-align: top;
                
                
            }
        }

        .new-post {
            padding: 5px;
            .new-post-icon {
                display: block;
                height: 32px;
                line-height: 32px;
                background: url('//www.v2ex.com/static/img/flat_compose.png') no-repeat;
                background-size: 32px 32px;
                background-position: 0 0;
                padding-left: 32 + 10px;
            }
        }
    }
</style>