// 机器人相关控制器

const bot = require('../bot');
const clog = require('yooofur-clog');
const rer = require('../controllers/return');

module.exports = {
    sendFriendMessage: async (req, res, next) => {
        const { content, target } = req.body;
        if (!content) {
            rer(res, 400);
            return;
        };
        await bot.sendFriendMessage(content, target);
        clog.log(`${req.connection.remoteAddress} -> [bot] 发送好友消息 ${target}: ${content}`);
        rer(res, 0);
    }
};