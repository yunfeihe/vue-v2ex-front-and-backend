<template>
    <header class="page-header">
        <div class="page-header-inner">
            <router-link :to="{name: 'Index'}"><h1 class="title-logo">v2ex</h1></router-link>
            <!-- https://www.v2ex.com/static/img/v2ex@2x.png -->
            <div class="search-form">
                <form action="./">
                   <input class="search-input" type="text">
                </form>
            </div>
            <ul class="nav">
                <li class="nav-item">
                    <router-link :to="{name: 'Index'}">首页</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Index'}">注册</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Index'}">登陆</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .page-header {
        width: 100%;
        height: 44px;
        background-color: #fff;
        border-bottom: 1px solid rgba(0,0,0,.22);
        line-height: 44px;
        .page-header-inner {
            min-width: 600px;
            max-width: 1060px;
            margin: 0 auto;
            .title-logo, .search-form, .nav {
                display: inline-block;
                vertical-align: top;
            }
            .title-logo {
                font-size: 0;
                background: url('//www.v2ex.com/static/img/v2ex@2x.png') no-repeat;
                width: 94px;
                height: 100%;
                background-size: 94px 30px;
                background-position: center center;
                margin-right: 109.6 - 94px;
            }
            .search-form {
                background: url('//www.v2ex.com/static/img/qbar_light@2x.png') no-repeat;
                background-size: 276px 28px;
                background-position: center center;
                // height: 28px;
                height: 44px;
                width: 276px;
                position: relative;
                overflow: hidden;
                z-index: 99;
                form {
                    height: 28px;
                    .search-input {
                        position: absolute;
                        box-sizing: border-box;
                        height: 28px;
                        left: 30px;
                        top: 50%;
                        margin-top: -14px;
                        border: none;
                        outline: none;
                        background-color: rgba(0,0,0,0);
                        // border: 1px solid rgba(0, 0, 0, 0.2);
                        
                    }
                }
                
            }
            .nav {
                float: right;
                .nav-item {
                    display: inline-block;
                    margin-left: 15px;
                    a {
                        text-decoration: none;
                        color: #556;
                        &:hover {
                            color: #99a;
                        }
                    }
                }
            }
        }
    }
</style>
