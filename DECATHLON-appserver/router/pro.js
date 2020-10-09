const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const r = express.Router();

//1.登录接口        get /login/:uname&upwd 返回 1和0   没有请求主体
r.get('/login/:phone&:upwd', (req, res) => {
  var _phone = req.params.phone
  var _upwd = req.params.upwd
  console.log(_phone, _upwd);
  var sql = 'select * from  dec_user where phone=? and upwd=? '
  pool.query(sql, [_phone, _upwd], (err, result) => {
    if (err) throw err
    if (!result.length) {
      res.send('0')
    } else {
      res.send('1')
    }
  })
});
r.post('/login', (req, res) => {
  var _phone = req.body.phone
  var _upwd = req.body.pwd
  console.log(_phone, _upwd);
  var sql = 'select * from  dec_user where phone=? and upwd=? '
  pool.query(sql, [_phone, _upwd], (err, result) => {
    if (err) throw err
    if (!result.length) {
      res.send('0')
    } else {
      res.send('1')
    }
  })
})
//2.注册模块       post    /reg    返回1和0  有请求主体
r.post('/reg', (req, res) => {
  var obj = req.body;
  console.log(obj.phone);
  var sql = 'INSERT INTO dec_user SET?'
  var sql1 = 'select * from dec_user where phone=?'
  pool.query(sql1, [obj.phone], (err, reslut) => {
    if (err) throw err
    if (reslut.length > 0) {
      res.send('1')
    } else {
      pool.query(sql, [obj], (err, reslut) => {
        if (err) throw err
        res.send('0')
      })
    }
  })
})
r.post('/regs', (req, res) => {
  var obj = req.body;
  var sql1 = 'select * from dec_user where phone=?'
  pool.query(sql1, [obj.phone], (err, reslut) => {
    if (err) throw err
    if (reslut.length > 0) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})
//2.查询所以用户    get   /list    返回json       没有请求主体
r.get('/list', (req, res) => {
  var sql = 'select * from  dec_user'
  pool.query(sql, (err, reslut) => {
    if (err) throw err
    res.send(reslut)
  })
})
//3.根据uid删除用户 delete /deluser/:uid   返回1和0    没有请求主体
r.delete('/deluser/:uid', (req, res) => {
  var _uid = req.params.uid
  var sql = 'delete from dec_user where uid=?'
  pool.query(sql, [_uid], (err, reslut) => {
    if (err) throw err
    if (reslut.affectedRows > 0) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})
//4.根据uid查询用户 get /search/:uid     返回json     没有请求主体
r.get('/search/:uid', (req, res) => {
  var _uid = req.params.uid
  console.log(_uid);
  var sql = 'select * from dec_user where uid=?'
  pool.query(sql, [_uid], (err, reslut) => {
    if (err) throw err
    if (reslut.length > 0) {
      res.send(reslut)
    } else {
      res.send('0')
    }
  })
})
//5.根据uid修改用户 put  /update        返回1和0    有请求主体
r.put('/update', (req, res) => {
  var obj = req.body;
  var sql = 'update dec_user set? where uid=?'
  var sql1 = 'select * from dec_user where uid=?'
  pool.query(sql, [obj, obj.uid], (err, reslut) => {
    if (err) throw err
    if (reslut.affectedRows > 0) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})
//6.根据uid查询用户，注册之前验证用户是否存在，存在就不能注册   get   /select/:uname    返回1和0   无请求主体
r.get('/select/:uname', (req, res) => {
  var _uname = req.params.uname
  var sql = 'select * from xz_user where uname=?'
  pool.query(sql, [_uname], (err, reslut) => {
    if (err) throw err
    if (reslut.length > 0) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})

//导出路由器对象
module.exports = r;