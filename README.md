# FK93

### 一个由懒人集成的一个，奇奇怪怪的，Express框架API聚合。

## 奇奇怪怪的功能支持

- [mirai](https://github.com/mamoe/mirai) bot 支持 (通过 [project-mirai/mirai-api-http](https://github.com/project-mirai/mirai-api-http))
- [zzsj0928/luci-app-pushbot]([zzsj0928/luci-app-pushbot: PushBot running on openwrt (github.com)](https://github.com/zzsj0928/luci-app-pushbot)) 的 自定义推送

### 使用说明

```shell
git clone https://github.com/colour93/fk93
cd fk93
npm i
```

然后修改```config.default.json```的内容

```JSON
{
    // 常规设置
    "common": {
        // http 端口
        "http_port": 2333,
        // logger 日志模块
        "logger": true,
        // GET 根路径 自动 302
        "redirect": "https://github.com/colour93"
    },
    // 路由器推送服务 (zzsj0928/luci-app-pushbot) (需要先登录 bot)
    "routerPush": {
        // 验证 key (路由发送请求时的 query 中 key 字段)
        "key": "routerPushKey",
        // 目标QQ
        "qq": 123456789
    },
    // 密钥设置
    "keys": {
    },
    // 机器人相关设置
    "bot":{
        // 连接设置
        "connectConfig": {
            // mirai-api-http 的设置
            "host": "http://localhost",
            "authKey": "authKey",
            "qq": 987654321,
            "enableWebsocket": true
        },
        // bot 对外 http 接口的校验密钥 (POST 时字段)
        "verifyKey": "verifyKey"
    }
}
```

之后修改```config.default.json```的名字为```config.json```并将其中的注释删除

```shell
npm start
```

