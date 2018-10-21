const path = require('path');
const fs = require('fs');

module.exports = function(module) {

    const nodes = {
        qus: '问题',
        other: '其他',
        game: '游戏',
        bejing: '北京',
        shanghai: '上海',
        taobao: '淘宝',
        '2018': '2018',
        guitar: '吉他',
    }
    for(let key in nodes) {
        if(nodes.hasOwnProperty(key)) {
            module.Node.create({
                title: nodes[key],
                name: key,
            })
        }
    }
    
    const rawPostsPath = path.join(__dirname, 'mock', 'posts.json');
    const rawPosts = JSON.parse(fs.readFileSync(rawPostsPath));
    console.log('rawPosts', rawPosts);
    module.User.create({
        username: 'admin',
        password: 'admin',
    })
    for(let post of rawPosts) {
        module.Post.create({
            title: post.title,
            content: post.content,
            author: 'admin',
            node: 'other',
        })
    }

};