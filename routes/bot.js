const express = require('express');
const router = express.Router();
const clog = require('yooofur-clog');
const appConfig = require('../config.json');
const rer = require('../controllers/return');
const ctrl = require('../controllers/bot');

// 这，是一个鉴权中间件
function access (req, res, next) {
    const { verifyKey } = appConfig.bot;
    const { key } = req.body;
    if (key!=verifyKey) {
        clog.warn(`${req.connection.remoteAddress} 鉴权失败`);
        rer(res, 401);
        return;
    };
    next();
};

// 根路径跳转
router.get('/', function(req, res, next) {
  res.redirect(appConfig.common.redirect);
});

// 发送好友消息
router.post('/sendFriendMessage', access, ctrl.sendFriendMessage);


module.exports = router;
