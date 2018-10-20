const fs = require('fs');
const path = require('path');


const moduleExport = {

};
const main = function() {
    const modulePath = './manage/module';
    const modulesName = fs.readdirSync(modulePath);
    const modulesPath = modulesName.map(fileName => {
        return path.join(path.resolve('.'), modulePath, fileName);
    })
    
    for(let modulePath of modulesPath) {
        const fileName = path.basename(modulePath, '.js');
        moduleExport[fileName] = require(modulePath);
    }
    module.exports = moduleExport;
    // console.log('moduleExport', moduleExport);
}


main();