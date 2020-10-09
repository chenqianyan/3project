const express = require('express');
//引入连接池模块
const pool = require('../pool.js');

//创建路由器对象
const r = express.Router();
//1.ajax第一个测试接口
r.get('/first', (req, res) => {
	//console.log(11111)
	res.send("第一个AJAX测试接口")
})
r.get('/ajax02', (req, res) => {
	res.send('ajax练习')
})

//原生的http的get带参数
r.get('/http_get', (req, res) => {
	var _uname = req.query.uname;
	var _upwd = req.query.upwd;
	pool.query('select * from xz_user where uname=? and upwd=?', [_uname, _upwd], (err, result) => {
		if (err) throw err
		console.log(result)
		if (result.length > 0) {
			res.send('1')
		} else {
			res.send('2')
		}
	})
})
//查询所有
r.get('/http', (req, res) => {
	pool.query('select * from xz_user', (err, result) => {
		if (err) throw err
		res.send(result)
	})
})
//restful用get方法 查询所有
r.get('/home_list', (req, res) => {
	pool.query('select * from xz_user', (err, result) => {
		if (err) throw err
		res.send(result)
	})
})
r.get('/update', (req, res) => {
	var obj = req.query
	console.log(obj)
	pool.query('UPDATE xz_user SET ? WHERE uid=?', [obj, obj.uid], (err, result) => {
		if (err) throw err
		console.log(result)
		if (result.affectedRows == 1) {
			pool.query("select * from xz_user where uid=?", [obj.uid], (err, result) => {
				if (err) throw err
				res.send(result)
			})
		} else (
			res.send("2")
		)
	})
})


//restful用get方法，不使用？ 变量名之前有；
r.get('/res_login/:uname&:upwd', (req, res) => {
	var _uname = req.params.uname
	var _upwd = req.params.upwd
	var sql = "select * from xz_user where uname=? and upwd=? ";
	pool.query(sql, [_uname, _upwd], (err, result) => {
		if (err) throw err
		if (result.length > 0) {
			res.send("1")
		} else {
			res.send("2")
		}
	})
})

// 使用restful用delete删除数据，地址栏只能用get方法
r.delete('/res_del/:uid', (req, res) => {
	var _uid = req.params.uid
	var sql = 'delete from xz_user where uid=?';
	pool.query(sql, [_uid], (err, result) => {
		if (err) throw err
		console.log(result)
		if (result.affectedRows > 0) {//影响大于1行，说明删除成功
			res.send('1')
		} else {
			res.send('0')
		}
	})
})
// restful 方法就是路由传参 分两类
//有请求主体（post，put）
//无请求主体（gte, delete）
//使用restful-post登录（其实得用get）
r.post("/post_login", (req, res) => {
	var _uname = req.body.uname;
	var _upwd = req.body.upwd
	//console.log(_uname, _upwd)
	var sql = 'select * from xz_user where uname=? and upwd=?'
	pool.query(sql, [_uname, _upwd], (err, result) => {
		if (err) throw err
		if (result.length > 0) {
			res.send('1')
		} else {
			res.send('0')
		}
	})
})
//使用restful-put 修改数据
r.put('/put_pudate', (req, res) => {
	var obj = req.body
	//console.log(obj)
	var sql = 'update xz_user set ? where uid=?'
	pool.query(sql, [obj, obj.uid], (err, result) => {
		if (err) throw err
		console.log(result)
		if (result.affectedRows == 1) {
			res.send('1')
		} else {
			res.send('0')
		}
	})
})

//导出路由器对象
module.exports = r;