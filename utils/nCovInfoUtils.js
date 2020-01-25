const superagent = require('superagent')
const cheerio = require('cheerio')
const spider = require('../service/spider')
/**
 * 跳过数据库检索获取实时最新数据
 */
const getRealTimeData = () => {
    let url = 'http://t.cn/A6vBv3yL'
    return new Promise((resolve, reject) => {
        superagent.get(url).end((err, res) => {
            if (err) {
                reject(err)
            } else {
                // console.log(res)
                let result = {
                    sumInfo: getSumInfo(res),
                    provinceInfo: getProvinceInfo(res)

                }
                resolve(result)
            }
        })
    })
}
// 获取数据库数据
const getDatabaseData = () => {
    return new Promise((resolve, reject) => {
        spider.getAllInfo().then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 根据获取的内容解析得到想要的数据
 * @param {*} res superagent得到的数据
 */
const getSumInfo = (res) => {
    let $ = cheerio.load(res.text)
    let parseArray = $('div.mapBox___qoGhu .mapTop___2VZCl .confirmedNumber___3WrF5 .content___2hIPS').text().split(' ')
    // console.log(parseArray);
    let result = {
        nationWideConfirmed: parseArray[2],
        suspected: parseArray[5],
        cured: parseArray[7],
        died: parseArray[10]
    }
    return result
}
/**
 * 获取省份的数据
 * @param {*} res superagent得到的数据
 */
const getProvinceInfo = (res) => {
    let provinces = []
    let $ = cheerio.load(res.text)
    var patt = /(\swindow\.getAreaStat\s=\s).*\}\]\}\]/g
    var final = patt.exec(res.text)[0].replace(' window.getAreaStat = ', '')
    return JSON.parse(final)
}
const parseHtml = (provinces, $, className) => {
    return provinces
}

exports.getRealTimeData = getRealTimeData
exports.getDatabaseData = getDatabaseData