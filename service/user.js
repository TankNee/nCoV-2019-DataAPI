const db = require('../database/mysql')

/**
 * 根据用户名查询用户信息
 * @param {*} userName 用户名
 */
const getUserInfo = (userName) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE userName = '${userName}'`, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 更新用户信息
 * @param {*} user 用户对象 
 */
const updateUserInfo = (user) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE users SET userName = '${user.userName}', password = '${user.password}',role = '${user.role}', lastLoginTime = ${user.lastLoginTime} WHERE id = ${user.id}`,(err,rows) => {
            if(err){
                reject(err)
            }
            resolve(rows)
        })
    })
}
exports.getUserInfo = getUserInfo
exports.updateUserInfo = updateUserInfo