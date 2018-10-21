const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const fs = require('fs');
const path = require('path');

const moduleManager = require(path.join(path.resolve('.'), 'manage', 'manage.js'));

moduleManager.then(__module => {
    const app = express();
    app.use(express.static('static'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(expressSession({
        secret: 'foo',
        name: 'sid',
        resave: false,
        saveUninitialized: true,
    }))
    app.use(function mountModules(req, res, next){
        req._isDebug = true;
        if(req._isDebug) {
            console.log(`request: ${req.originalUrl}, ${req.baseUrl}, ip: ${req.ip}, method: ${req.method} time: ${new Date().toLocaleString()}` );
        }
        req.app.module = __module;
        next();
    });
    
    (function initRouters() {
        const routerDirPath = path.join(path.resolve('.'), 'app');
        const routerPathes = fs.readdirSync(routerDirPath);
        const routerRealPathes = routerPathes.map(routePath => path.join(path.resolve('.'), 'app',routePath, 'router.js'));
        for(let i = 0; i < routerRealPathes.length; i++) {
            let routerPath = routerRealPathes[i];
            if(fs.existsSync(routerPath)) {
                app.use('/' + routerPathes[i], require(routerPath));
            }
        }
    })();

    (function initNodes() {
        const module = __module;

        console.log('path:', __dirname);;

        // const nodes = {
        //     qus: '问题',
        //     other: '其他',
        //     game: '游戏',
        //     bejing: '北京',
        //     shanghai: '上海',
        //     taobao: '淘宝',
        //     '2018': '2018',
        //     guitar: '吉他',
        // }
        
        // for(let key in nodes) {
        //     if(nodes.hasOwnProperty(key)) {
        //         module.Node.create({
        //             title: nodes[key],
        //             name: key,
        //         })
        //     }
        // }
    })();

    app.use(function(req, res) {
        res.status(404).json({
            code: 404,
            msg: 'NOT FIND',
        })
    })
    
    const server = app.listen(3500, '127.0.0.1', (err) => {
        if(err) {
            console.log('err', err);
        }
        console.log('start');
    });

}).catch(err => {
    console.log('err', err);
});

