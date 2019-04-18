// 查找某个目录下所有的js文件
const fs = require('fs');
const files = [];
function walk(path){
    //同步写法
    fs.readdirSync(path).forEach(file => {    //会返回一个数组
        const newPath = path + '/' + file;
        const stat = fs.statSync(newPath)
        if(stat.isFile()){
            // 是JS文件吗？
            // console.log('isFile')
            if(/\.js$/.test(file)){
            files.push(file)
        }

        }else if(stat.isDirectory()){
            console.log('isDrectory');
            walk(newPath)      //递归，查找Directory下的.js文件

        }
        console.log(file,'+++++')
    })
    // 异步写法
    // fs.readdir(path,function(error,files){
    //     if(error){
    //         console.log(error);
    //         return;
    //     }
    //     console.log(files,'----')
    // })                       


}
walk('./src');
console.log(files,'-');