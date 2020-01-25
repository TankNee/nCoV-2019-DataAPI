const mysql = require('mysql')
/*
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '451000',
    database: 'ncov'
})
connection.connect();

connection.query(`SELECT * FROM ncov_cityinfo ORDER BY id DESC LIMIT 1`, function (error, results, fields) {
    console.log(results)
});

connection.end()*/

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '451000',
    database: 'ncov'
})

const query = (sql, callback) => {
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, rows) => {
            callback(err, rows)
            connection.release()
        })
    })
}

const getAllInfo = () => {
    return new Promise((resolve, reject) => {
        query(`SELECT * FROM ncov_cityinfo ORDER BY id DESC LIMIT 1`, (err, rows) => {
            if (err) {
                reject(err)
            }
            console.log(1, rows)
            resolve(rows)
        })
    })
}

const updateCityInfo = (city) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE ncov_cityinfo SET province= '${city.province}',cityname = '${city.cityName}' ,confirmed = ${city.confirmed},died = ${city.died},cured=${city.cured} WHERE cityname = '${city.cityName}'`
        query(sql, (err, rows) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            console.log(rows);
            
            resolve(rows)
        })
    })
}
let citydemo = {
    province: '湖北',
    cityName: '武汉',
    confirmed: 3,
    died: 4 || '0',
    cured: 6 || '0'
}
updateCityInfo(citydemo)
// getAllInfo()