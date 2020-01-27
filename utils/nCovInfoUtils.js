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
                    sumInfo: getSumInfoRealTime(res, addtime),
                    provinceInfo: getProvinceInfoRealTime(res, addtime)
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
            let result = []
            spider.getSpecifyInfo('addtime', res[0].addtime, 'provinces', 'true').then(res0 => res0)
                .catch(err => {
                    reject(err)
                }).then(res1 => {
                    spider.getSpecifyInfo('addtime', res[0].addtime, 'cities', 'true').then(res2 => {
                        res1.forEach(province => {
                            let temp = province
                            let cityList = []
                            res2.forEach(city => {
                                if (city.provinceShortName === province.provinceShortName) {
                                    cityList.push(city)
                                }
                            })
                            temp['cities'] = cityList
                            result.push(temp)
                        })  
                    }).catch(err => {
                        reject(err)
                    }).then(res3 =>{
                        resolve(result)
                    })

                })

        }).catch(err => {
            reject(err)
        })
    })
}
/**
 * 获取单个城市的全部/最新信息
 * @param {*} attrName 参数名称
 * @param {*} attrValue 参数值
 * @param {*} tableName 表名
 * @param {*} all 是否选取全部信息，如果为否，那么就返回最新信息
 */
const getSpecifyInfo = (attrName, attrValue, tableName, all = false) => {
    return new Promise((resolve, reject) => {
        spider.getSpecifyInfo(attrName, attrValue, tableName, all).then(res => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
/**
 * 根据获取的内容解析得到想要的数据
 * @param {*} res superagent得到的数据
 * @param {*} addtime 添加的时间
 */
const getSumInfoRealTime = (res, addtime = Date.now()) => {
    let $ = cheerio.load(res.text)
    let parseArray = $('div.mapBox___qoGhu .mapTop___2VZCl .confirmedNumber___3WrF5 .content___2hIPS').text().split(' ')
    // console.log(parseArray);
    let tempArray = []
    parseArray.forEach(e =>{
        var temp = parseInt(e)
        if(temp){
            tempArray.push(temp)
        }
    })
    let result = {
        confirmedCount: tempArray[0],
        suspectedCount: tempArray[1],
        curedCount: tempArray[3],
        deadCount: tempArray[2],
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
const getProvinceInfoRealTime = (res, addtime = Date.now()) => {
    let $ = cheerio.load(res.text)
    var patt = /(\swindow\.getAreaStat\s=\s).*\}\]\}\]/g
    var final = patt.exec(res.text)[0].replace(' window.getAreaStat = ', '')
    var json = JSON.parse(final)
    json.forEach(province => {
        province['addtime'] = addtime
        spider.insertProvinceInfo(province)
        province.cities.forEach(city => {
            city['provinceName'] = province.provinceShortName
            city['addtime'] = addtime
            spider.insertCityInfo(city)
        })
    });
    return json
}

exports.getRealTimeData = getRealTimeData
exports.getDatabaseData = getDatabaseData
exports.getSpecifyInfo = getSpecifyInfo
