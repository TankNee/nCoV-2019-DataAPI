const db = require('../database/mysql')
/**
 * 获取数据库中的全部信息
 */
const getAllInfo = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM suminfo ORDER BY addtime DESC LIMIT 1`, (err, rows) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 获取单个城市的全部/最新信息
 * @param {*} attrName 参数名称
 * @param {*} attrValue 参数值
 * @param {*} tableName 表名
 * @param {*} all 是否选取全部信息，如果为否，那么就返回最新信息
 * @param isSum
 */
const getSpecifyInfo = (attrName,attrValue ,tableName, all = 'false',isSum = false) => {
    return new Promise((resolve, reject) => {
        var limit = all === 'true' ? '' : 'LIMIT 1'
        var condition = `WHERE ${attrName} = '${attrValue}'`;
        if (isSum){
            condition = ''
        }
        db.query(`SELECT * FROM ${tableName} ${condition} ORDER BY addtime DESC ${limit}`, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

/**
 * 插入综合信息
 * @param {*} sum 综合信息对象 
 */
const insertSumInfo = (sum) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO suminfo (confirmedCount,suspectedCount,deadCount,curedCount,addtime) values (${sum.confirmedCount},${sum.suspectedCount},${sum.deadCount},${sum.curedCount},${sum.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

/**
 * 插入省份的数据
 * @param {*} province 省份对象 
 */
const insertProvinceInfo = (province) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO provinces (provinceName,provinceShortName,confirmedCount,suspectedCount,deadCount,curedCount,addtime) values ('${province.provinceName}','${province.provinceShortName}',${province.confirmedCount},${province.suspectedCount},${province.deadCount},${province.curedCount},${province.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

/**
 * 插入城市信息
 * @param {*} city 城市信息对象
 */
const insertCityInfo = (city) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO cities (provinceShortName,cityName,confirmedCount,suspectedCount,deadCount,curedCount,addtime) values ('${city.provinceName}','${city.cityName}',${city.confirmedCount},${city.suspectedCount},${city.deadCount},${city.curedCount},${city.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 更新api使用信息
 * @param {*} usage
 */
const updateApiUsage = (usage,addtime) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE apiusage SET apiusage= ${++usage},addtime = ${addtime} WHERE id = 1`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}
exports.getAllInfo = getAllInfo
exports.insertSumInfo = insertSumInfo
exports.insertProvinceInfo = insertProvinceInfo
exports.insertCityInfo = insertCityInfo
exports.updateApiUsage = updateApiUsage
exports.getSpecifyInfo = getSpecifyInfo
