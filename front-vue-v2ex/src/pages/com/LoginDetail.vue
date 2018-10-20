<template>
    <panel-list class="register">
        <div class="list-item title">V2EX > 注册</div>
        <div class="list-item content">
            <form action="api/v1/login" method="POST" ref="form">
                <table class="">
                    <tbody>
                        <tr class="row">
                            <td class="sub-title">用户名</td>
                            <td class="input-wrap"><input name="username" type="text"></td>
                        </tr>
                        <tr class="row">
                            <td class="sub-title">密码</td>
                            <td class="input-wrap"><input name="password" type="password"></td>
                        </tr>
                        <tr class="row">
                            <td class="sub-title"></td>
                            <td class="input-wrap"><btn @click="login" :width="49" :height="29" :font-size="14" color="#333">登陆</btn></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </panel-list>
</template>

<script>

    const axios = require('axios');
    const crypto = require('crypto');
    import PanelList from '@com/PanelList';
    import Btn from '@com/Btn';
    export default {
        components: {
            PanelList,
            Btn,
        },
        methods: {
            login() {
                const form = this.$refs.form;
                const md5 = crypto.createHash('md5');

                const username = form.querySelector('input[name="username"]').value;
                let password = form.querySelector('input[name="password"]').value;
                password = md5.update(password).digest('hex');
                axios.post('/api/v1/login', {
                    username,
                    password,
                }).then((res) => {
                    if(res.data.code === 200) {
                        this.$store.commit('login', username);
                    }
                }).catch((err) => {
                    console.log('err', err);
                });
            }
        },
        mounted() {
            if(this.$store.state.isLogin) {
                this.$router.push({name: 'Index'});
            }
        },
    }
</script>


<style lang="scss" scoped>
    .register {
        .list-item {
            border-bottom: 1px solid #e2e2e2;
            &:last-of-type {
                border: none;
            }
        }
        .title {
            padding: 10px;
        }

        .content {
            width: 100%;
            padding: 10px;
            .row {
                .sub-title {
                    text-align: right;
                    width: 130px;
                    font-size: 14px;
                    line-height: 150%;
                    
                }
                .input-wrap {
                    padding: 5px;
                    input {
                        border-radius: 3px;
                        padding: 5px;
                        font-size: 14px;
                        border: 1px solid #ccc;
                        width: 240px;
                        font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB","Microsoft Yahei";
                        outline: none;

                    }
                    .fade {
                            display: block;
                            color: #ccc;
                            font-size: 14px;
                            line-height: 150%;
                    }
                }

            }
        }
    }
</style>
