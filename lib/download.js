const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
    targete = path.join(target || '.', '.download.temp')
    return new Promise((resolve, reject) => {
        download('CookeCheng/vue-template',target, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(target)
            }
        })
    })
}