var express = require('express');
var router = express.Router();
const nCovUtils = require('../utils/nCovInfoUtils')


/**
 * 获取实时数据
 */
router.get('/realtime', function (req, res, next) {
    nCovUtils.getRealTimeData().then(res1 => {
        res.send(res1)
        res.end()
    })
});
/**
 * 获取数据库内的最新数据
 */
router.get('/', function (req, res, next) {
    nCovUtils.getDatabaseData().then(res1 => {
        res.send(res1)
        res.end()
    }).catch(err => {
        res.send(err)
        res.end()
    })
});
/**
 * 获取全国统计的最新数据
 */
router.get('/sum', function (req, res, next) {
    nCovUtils.getSpecifyInfo('', '', 'sumInfo', 'true', true).then(res1 => {
        res.send(res1)
        res.end()
    }).catch(err => {
        res.send(err)
        res.end()
    })
})
/**
 * 获取单个城市的信息
 */
router.post('/city', function (req, res, next) {
    const {cityname, all} = req.query
    nCovUtils.getSpecifyInfo('cityName', cityname, 'cities', all).then(res1 => {
        res.send(res1)
        res.end()
    }).catch(err => {
        res.status(501)
        res.json(err)
        res.end()
    })
})
/**
 * 获取单个省份的全部信息
 */
router.post('/province', function (req, res, next) {
    const {province, all} = req.query
    // all = all ? true:false
    nCovUtils.getSpecifyInfo('provinceShortName', province, 'provinces', all).then(res1 => {
        nCovUtils.getSpecifyInfo('addtime', res1[0].addtime, 'cities', 'true').then(res2 => {
            let cityList = []
            res2.forEach(city => {
                if (city.provinceShortName === res1[0].provinceShortName) {
                    cityList.push(city)
                }
            });
            let result = {
                provinceInfo: res1,
                citiesOfProvince: cityList
            }
            res.send(result)
            res.end()
        }).catch(err => {
            res.status(501)
            res.json(err)
            res.end()
        })
    }).catch(err => {
        res.status(501)
        res.json(err)
        res.end()
    })
})


module.exports = router;
