const express = require('express');
const router = express.Router();
const fs = require('fs');

const Validator = {
    username(name) {
        return name && name.length > 0;
    },
    password(pwd) {
        return pwd && pwd.length > 0;
    }
}

router.post('/v1/register', (req, res) => {
    const wrap = async () => {
        const {username, password} = req.body;
        let hasError = false;
        let errMsg = 'error';
        if(!(Validator.username(username) && Validator.password(password))) {
            hasError = true;
            errMsg = '不合法的用户名或密码';
        }
        const module = req.app.module;
        if(!hasError) {          //开始判断用户名是否存在
            const existUser = await module.User.findOne({
                where: {
                    username,
                }
            });
            if(existUser !== null) {
                hasError = true;
                errMsg = '用户名已经存在';
            }  
        }
        if(!hasError) {        //没有错误，可以创建用户
            module.User.create({
                username,
                password,
            }).then(() => {
                res.json(204, {
                    code: 204,
                    msg: 'ok',
                });
            }).catch((err) => {
                hasError = true;
            });
        }        
        if(hasError) {       
            res.json(400, {
                code: 400,
                msg: errMsg,
            });
        }
    }
    wrap();
})

router.post('/v1/login', (req, res) => {
    (async () => {
        const {username, password} = req.body;
        console.log(username, password);
        let hasError = false;
        let errMsg = 'error';
        if(!(Validator.username(username) && Validator.password(password))) {
            hasError = true;
            errMsg = '不合法的用户名或密码';
        }
        const module = req.app.module;
        if(!hasError) {            //判断用户是否存在
            const user = await module.User.findOne({
                where: {
                    username,
                    password,
                }
            });
            if(user === null) {
                hasError = true;
                errMsg = '用户名或密码不对';
            }
        }
        if(!hasError) {          //没有错误，成功登陆
            req.session.isLogin = true;
            req.session.username = username;
            // req.session.password = password;
            res.json(200, {
                code: 200,
                msg: 'ok',
            });
        } else {
            res.json(400, {
                code: 400,
                msg: errMsg,
            });
        }
    })();
})

router.post('/v1/clear', (req, res) => {
    req.session.destroy(err => {
        console.log('clear session');
        if(err) {
            console.log('session destroy error', err);
        }
    });

router.get('/v1/hot.json', (req, res) => {
    const d = JSON.parse(fs.readFileSync('./app/mock/hot.json'));
    res.json(d);
});

module.exports = router;