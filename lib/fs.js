const fs = require('fs')

const isDirectory = (path) => fs.statSync(path).isDirectory()

const filesInDirectory = (rootDir) => {
    const returnData = []
    const fileList = fs.readdirSync(rootDir)

    fileList.forEach(_dir => {
        const path = `${rootDir}/${_dir}`
        if(isDirectory(path)){
            returnData.push({
                name: _dir,
                isDir: true,
                dir: filesInDirectory(path)
            })
        }
        else {
            returnData.push({
                name: _dir, 
                isDir: false
            })
        }
    })

    return returnData
}

module.exports = {filesInDirectory}