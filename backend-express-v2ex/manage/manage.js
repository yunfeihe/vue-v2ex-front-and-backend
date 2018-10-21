const fs = require('fs');
const path = require('path');


const allModules = {

};
const main = function() {
    const modulePath = './manage/module';
    const modulesName = fs.readdirSync(modulePath);
    const modulesPath = modulesName.map(fileName => {
        return path.join(path.resolve('.'), modulePath, fileName);
    })
    
    for(let modulePath of modulesPath) {
        const fileName = path.basename(modulePath, '.js');
        console.log('fileName', fileName);
        allModules[fileName] = require(modulePath);
    }

    const moduleSyncPromises = [];
    for(let mName in allModules) {
        let module = allModules[mName];
        let syncPromise = module.sync({
            force: true,
        }).then(syncedModule => {
            return {
                name: mName,
                module: syncedModule,
            };
        });
        moduleSyncPromises.push(syncPromise);
    }
    let exportPromise = Promise.all(moduleSyncPromises)
        .then(modules => {
            const module = {};
            for(let m of modules) {
                module[m.name] = m.module;
            }
            return module;
        });
    module.exports = exportPromise;
}
main();