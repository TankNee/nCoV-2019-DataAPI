const superagent = require('superagent')
const cheerio = require('cheerio')
const spider = require('../service/spider')
/**
 * 跳过数据库检索获取实时最新数据
 */
const getRealTimeData = (addtime = Date.now()) => {
    let url = 'http://t.cn/A6vBv3yL'
    return new Promise((resolve, reject) => {
        superagent.get(url).end((err, res) => {
            if (err) {
                reject(err)
            } else {
                let result = {
                    sumInfo: getSumInfoRealTime(res,addtime),
                    provinceInfo: getProvinceInfoRealTime(res,addtime)
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
 * @param {*} addtime 添加的时间
 */
const getSumInfoRealTime = (res,addtime = Date.now()) => {
    let $ = cheerio.load(res.text)
    let parseArray = $('div.mapBox___qoGhu .mapTop___2VZCl .confirmedNumber___3WrF5 .content___2hIPS').text().split(' ')
    // console.log(parseArray);
    let result = {
        confirmedCount: parseArray[2],
        suspectedCount: parseArray[5],
        curedCount: parseArray[7],
        deadCount: parseArray[10],
        addtime: addtime
    }
    spider.insertSumInfo(result)
    return result
}
/**
 * 获取省份的数据
 * @param {*} res superagent得到的数据
 * @param {*} addtime 添加的时间
 */
const getProvinceInfoRealTime = (res,addtime = Date.now()) => {
    let $ = cheerio.load(res.text)
    var patt = /(\swindow\.getAreaStat\s=\s).*\}\]\}\]/g
    var final = patt.exec(res.text)[0].replace(' window.getAreaStat = ', '')
    var json =  JSON.parse(final)
    json.forEach(province => {
        province['addtime'] = addtime
        spider.insertProvinceInfo(province)
        province.cities.forEach(city =>{
            city['provinceName'] = province.provinceShortName
            city['addtime'] = addtime
            spider.insertCityInfo(city)
        })
    });
    return json
}

exports.getRealTimeData = getRealTimeData
exports.getDatabaseData = getDatabaseData