// 通用控制器
const clog = require('yooofur-clog');
const rer = require('../controllers/return');
const config = require('../config.json');
const bot = require('../bot');

module.exports = {
    routerPush: async (req, res, next) => {
        if (req.query.key!=config.routerPush.key) {
            clog.warn(`${req.connection.remoteAddress} 鉴权失败`);
            rer(res, 401);
            return;
        };
        await bot.sendFriendMessage(req.body.text, config.routerPush.qq);
        rer(res, 0);
        clog.log(`${req.connection.remoteAddress} -> [routerPush] 路由器状态信息推送: ${config.routerPush.qq}`);
    }
};