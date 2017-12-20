import { resolve } from 'path';

const download = require('download-git-repo')

module.exports = function (target) {
    targete = path.join(target || '.', '.download.temp')
    return new Promise(resolve, reject) {
        download('')
    }
}