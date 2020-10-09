const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const r = express.Router();

//1.查询首页轮播图    get   /list    返回json       没有请求主体
r.get('/banner', (req, res) => {
  var sql = 'select * from  dec_banner'
  pool.query(sql, (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
//健身
r.get('/DOMYOS', (req, res) => {
  let dom = 'DOMYOS'
  var sql = 'select * from  dec_index_product  where producttype=?'
  pool.query(sql, [dom], (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
//高尔夫
r.get('/INESIS', (req, res) => {
  let dom = 'INESIS'
  var sql = 'select * from  dec_index_product  where producttype=?'
  pool.query(sql, [dom], (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
//徒步
r.get('/Forclaz', (req, res) => {
  let dom = 'Forclaz'
  var sql = 'select * from  dec_index_product  where producttype=?'
  pool.query(sql, [dom], (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
r.get('/details', (req, res) => {
  var lid = req.query.lid
  console.log(lid);
  var sql = 'select * from  dec_index_product  where lid=?'
  pool.query(sql, [lid], (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
// 查询
r.get('/search', (req, res) => {
  var data = req.query.data;
  console.log(data);
  var sql = "select * from dec_index_product where title like '%" + data + "%'";
  pool.query(sql, (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
//导出路由器对象
module.exports = r;