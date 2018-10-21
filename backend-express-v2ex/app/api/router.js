const express = require('express');
const router = express.Router();
const fs = require('fs');

const Validator = {
    username(name) {
        return name && name.length > 0;
    },
    password(pwd) {
        return pwd && pwd.length > 0;
    },
    postTitle(c) {
        return c && c.length > 0;
    },
    author(c) {
        return c && c.length > 0;
    }

};

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
});

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
        let user;
        if(!hasError) {            //判断用户是否存在
            user = await module.User.findOne({
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
            req.session.user = user;
            // req.session.password = password;
            res.json(200, {
                code: 200,
                msg: 'ok',
                data: {
                    username: user.get('username'),
                    head_url: user.get('head_url'),
                },
            });
        } else {
            res.json(400, {
                code: 400,
                msg: errMsg,
            });
        }
    })();
});

router.post('/v1/isLogin', (req, res) => {
    if(req.session.isLogin) {
        const user = req.session.user;
        console.log('user', user);
        res.status(200).json({
            code: 200,
            msg: '已经登陆',
            data: {
                username: user.username,
                head_url: user.head_url,
            }
        });
    } else {
        res.status(200, {
            msg: '未登录',
        })
    }
});

router.post('/v1/clear', (req, res) => {
    req.session.destroy(err => {
        console.log('clear session');
        if(err) {
            console.log('session destroy error', err);
        }
    });
})

router.post('/v1/new-post', (req, res) => {
    try {
        if(req.session.isLogin) {
            const postData = req.body;
            const module = req.app.module;
            module.Post.create({
                title: postData.postTitle,
                content: postData.postContent,
                author: postData.author,
                node: postData.node
            }).then(post => {
                res.status(200).json({
                    postId: post.id,
                });
            });
        } else {
            res.status(400).json({
                code: 400,
                msg: '请登录',
            })
        }
    } catch(err) {
        res.status(400).json({
            code: 400,
            msg: '未知错误',
        });
    }
    
});

router.post('/v1/nodes', (req, res) => {
    const module = req.app.module;
    module.Node.findAll()
        .then(result => {
            const nodes = [];
            for(let node of result) {
                let n = {
                    id: node.get('id'),
                    name: node.get('name'),
                    title: node.get('title'),
                };
                nodes.push(n);
            };
            res.status(200).json(nodes);
        })
        .catch(err => {
            console.log('err', err);
        });
    
});

router.post('/v1/post/:id', (req, res) => {
    const postId = req.params.id;
    const module = req.app.module;
    console.log('req.params', req.params);
    module.Post.findOne({
        where: {
            id: postId,
        }
    }).then(post => {
        if(post) {
            res.status(200).json({
                title: post.get('title'),
                content: post.get('content'),
                time: post.get('createdAt'),
                author: post.get('author'),
            });
        } else {
            res.status(400).json({
                code: 400,
                msg: '不存在',
            })
        }
        
    }).catch(err => {
        console.log('err', err);
        res.status(400).json({
            msg: `${'' + err}`,
        })
    })
})

router.post('/v1/posts', (req, res) => {
    const wrap = async function() {
        try {
            const module = req.app.module;
            const allPost = await module.Post.findAll();
            const posts = [];
            for(let p of allPost) {
                let user = await module.User.findOne({
                    where: {
                        username: p.get('author'),
                    }
                });
                let post = {
                    id: p.get('id'),
                    title: p.get('title'),
                    content: p.get('content'),
                    time: p.get('createdAt'),
                    author: p.get('author'),
                    node:p.get('node'),
                    user: {
                        head_url: user.get('head_url'),
                    },
                };
                posts.push(post);
            }
            res.status(200).json(posts);
        } catch(e) {
            res.status(400).json({
                code: 400,
                msg: '' + err,
            })
        }
    };
    wrap();
})

router.get('/v1/hot.json', (req, res) => {
    const d = JSON.parse(fs.readFileSync('./app/mock/hot.json'));
    res.json(d);
});

module.exports = router;