const express = require('express');
//引入body-parser模块
const bodyParser = require('body-parser');
//引入用户路由器
const ajax = require('./router/ajax.js');
const pro = require('./router/pro.js');
const index = require('./router/index.js');
//创建web服务器
const app = express();
//设置端口 
app.listen(8081);
//托管静态资源到public目录
app.use(express.static('public'));
app.use(express.static('pro'));
app.use(express.static('pro/html'));
app.use(express.static('pro/img'));

//在路由器之前，应用body-parser中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
  extended: false
}));
//将用户路由器挂载到web服务器，添加前缀
app.use('/ajax', ajax)
app.use('/pro', pro)
app.use('/index', index)