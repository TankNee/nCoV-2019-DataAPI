const superagent = require('superagent')
const cheerio = require('cheerio')
const spider = require('../service/spider')
/**
 * 跳过数据库检索获取实时最新数据
 */
const getRealTimeData = () => {
    let url = 'https://3g.dxy.cn/newh5/view/pneumonia?enterid=1579582238&scene=2&clicktime=1579582238&isappinstalled=0&from=timeline'
    return new Promise((resolve, reject) => {
        superagent.get(url).end((err, res) => {
            if (err) {
                reject(err)
            } else {
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
        cured: parseArray[8],
        died: parseArray[11]
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
    // 因为原网页会有展开的部分，所以对展开的部分单独处理
    let expendProvince = 'div.mapBox___qoGhu .areaBox___3jZkr .expand___wz_07'
    $(expendProvince).toArray().forEach((v, i) => {
        $(v).each((index, el) => {
            let province = {
                provinceName: '',
                confirmed: '',
                died: '',
                cured: '',
                cities: []
            }
            $('.areaBlock1___3V3UU', el).each((i, e) => {
                let temp = $('p', e).toArray()
                province = {
                    provinceName: $(temp[0]).text(),
                    confirmed: $(temp[1]).text(),
                    died: $(temp[2]).text(),
                    cured: $(temp[3]).text(),
                    cities: []
                }
                provinces.push(province)
            })
            $('.areaBlock2___27vn7', el).each((i, e) => {
                let temp = $('p', e).toArray()
                let city = {
                    province: province.provinceName,
                    cityName: $(temp[0]).text(),
                    confirmed: $(temp[1]).text(),
                    died: $(temp[2]).text() || '0',
                    cured: $(temp[3]).text() || '0'
                }
                spider.updateCityInfo(city).then(res => {
                    if (res.affectedRows === 0) {
                        spider.insertCityInfo(city)
                    }
                }).catch(err=>{
                    console.log(err)
                })
                province.cities.push(city)
            })
        })
    })
    let provinceSelector = 'div.mapBox___qoGhu .areaBox___3jZkr .fold___xVOZX'
    $(provinceSelector).toArray().forEach((v, i) => {
        $(v).each((index, el) => {
            let province = {
                provinceName: '',
                confirmed: '',
                died: '',
                cured: '',
                cities: []
            }
            $('.areaBlock1___3V3UU', el).each((i, e) => {
                let temp = $('p', e).toArray()
                province = {
                    provinceName: $(temp[0]).text(),
                    confirmed: $(temp[1]).text(),
                    died: $(temp[2]).text(),
                    cured: $(temp[3]).text(),
                    cities: []
                }
                provinces.push(province)
            })
            $('.areaBlock2___27vn7', el).each((i, e) => {
                let temp = $('p', e).toArray()
                let city = {
                    province: province.provinceName,
                    cityName: $(temp[0]).text(),
                    confirmed: $(temp[1]).text(),
                    died: $(temp[2]).text() || '0',
                    cured: $(temp[3]).text() || '0'
                }
                spider.updateCityInfo(city).then(res => {
                    if (res.affectedRows === 0) {
                        spider.insertCityInfo(city)
                    }
                }).catch(err=>{
                    console.log(err)
                })
                province.cities.push(city)
            })
        })
    })
    return provinces
}


exports.getRealTimeData = getRealTimeData
exports.getDatabaseData = getDatabaseData