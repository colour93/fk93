// 机器人连接

var Mirai = require('node-mirai-sdk');
var clog = require('yooofur-clog');
var config = require('./config.json');


const bot = new Mirai(config.bot.connectConfig);

// auth 认证(*)
bot.onSignal('authed', () => {
  clog.info(`bot 已登陆，QQ: ${config.bot.connectConfig.qq}, session key ${bot.sessionKey}`);
  bot.verify();
});

// session 校验回调
bot.onSignal('verified', async () => {
  clog.info(`bot 已校验，session key ${bot.sessionKey}`);
  // 获取好友列表，需要等待 session 校验之后 (verified) 才能调用 SDK 中的主动接口
  const friendList = await bot.getFriendList();
  clog.info(`bot 好友数量 ${friendList.length}`);
});

module.exports = bot;