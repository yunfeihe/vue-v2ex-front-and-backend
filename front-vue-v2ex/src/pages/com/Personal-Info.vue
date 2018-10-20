<template>
    <div class="login">
        <panel-list v-if="!isLogin">
            <div class="list-item title">
                <h2 class="panel-title">{{ title }}</h2>
                <div class="desc">{{ desc }}</div>
            </div>
            <div class="list-item login-part">
                <router-link :to="{name: 'Register'}" tag="div" class="center-wrap"><btn :width="74" :height="28">现在注册</btn></router-link>
                <div class="other">已注册用户请 <router-link class="login-link" :to="{name: 'Login'}">登陆</router-link></div>
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
</style>