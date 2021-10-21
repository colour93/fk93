const express = require('express');
const router = express.Router();
const clog = require('yooofur-clog');
const ctrl = require('../controllers/common');
const appConfig = require('../config.json');

// 根路径跳转
router.get('/', function(req, res, next) {
  res.redirect(appConfig.common.redirect);
});



// 专门用于输出 post body
router.post('/test', (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  res.send("ok");
});

// 路由器自定义推送
router.post('/routerPush', ctrl.routerPush);


module.exports = router;
