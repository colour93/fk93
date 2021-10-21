// 返回信息统一化

module.exports =  (res, code, msg) => {
    switch (code) {
        case 0:
            msg = "success"
            break;
        case 400:
            msg = "请求错误"
            break;
        case 401:
            msg = "无权操作"
            break;
    };
    res.send({code, msg});
};