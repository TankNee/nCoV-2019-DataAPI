var express = require('express');
var router = express.Router();
var user = require('../service/user')
/**
 * 管理员登录接口
 */
router.post('/login', function (req, res, next) {
    // var { userName, password } = req.query
    var userName = req.body.userName
    var password = req.body.password
    var lastLoginTime = req.body.lastLoginTime
    user.getUserInfo(userName).then(res0 =>{
        if(res0.length === 0){
            // res.status(601)
            res.json({
                code: 602,
                msg: '用户不存在'
            })
            res.end()
            return;
        }
        if(res0[0].password === password){
            // let userObj = {
            //     id: res0[0].id,
            //     userName: res0[0].userName,
            // }
            res0[0].lastLoginTime = lastLoginTime
            user.updateUserInfo(res0[0])
            res.status(200)
            res.json({
                code: 200,
                msg: '登陆成功',
                userInfo: res0[0]
            })
            res.end()
        }else{
            // res.status(601)
            res.json({
                code: 601,
                msg: '密码错误'
            })
            res.end()
        }
    }).catch(err =>{
        res.send(err)
        res.end()
    })
});

module.exports = router;
