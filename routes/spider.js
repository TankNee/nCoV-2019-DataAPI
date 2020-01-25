var express = require('express');
var router = express.Router();
const nCovUtils = require('../utils/nCovInfoUtils')



router.get('/realtime', function (req, res, next) {
    nCovUtils.getRealTimeData().then(res1 => {
        res.send(res1)
        res.end()
    })
});
router.get('/', function (req, res, next) {
    nCovUtils.getDatabaseData().then(res1 => {
        res.send(res1)
        res.end()
    })
});




module.exports = router;
