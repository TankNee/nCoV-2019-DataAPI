const db = require('../database/mysql')
/**
 * 获取数据库中的全部信息
 */
const getAllInfo = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ncov_cityinfo ORDER BY province DESC`, (err, rows) => {
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
        let sql = `INSERT INTO ncov_cityinfo (province,cityname,confirmed,died,cured) values ('${city.province}','${city.cityName}',${city.confirmed},${city.died},${city.cured})`
        db.query(sql, (err, rows) => {
            if(err){
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 更新城市信息
 * @param {*} city 
 */
const updateCityInfo = (city) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE ncov_cityinfo SET province= '${city.province}',cityname = '${city.cityName}' ,confirmed = ${city.confirmed},died = ${city.died},cured=${city.cured} WHERE cityname = '${city.cityName}'`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            console.log(rows);
            resolve(rows)
        })
    })
}
exports.getAllInfo = getAllInfo
exports.insertCityInfo = insertCityInfo
exports.updateCityInfo = updateCityInfo