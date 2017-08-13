const express = require('express')
const Mock = require('mockjs');
const bodyParser = require('body-parser');
const session = require('express-session');
// 引入 art-Template
const template = require('art-template');

// 设置路由
const router = require('./router/router.js')
//设置后台数据
const pdata = require('./src/position.json')
const sdata =require('./src/service.json')

const app = express();


// 设置模板
/*app.engine('art', require('express-art-template'));
app.set('view options', {
	debug: process.env.NODE_ENV !== 'production'
});*/


// 设置模板 EJS
app.set("view engine", "ejs");
app.set("views", "views");

// 设置静态资源
app.use(express.static("public"));
// 设置bodyParser中间件，处理post请求的请求参数
app.use(bodyParser());


/*let position = Mock.mock({
	code:0,
	data:pdata
})*/
app.post('/info', (req, res) => {
    let info = req.body;
	console.log(info)
    res.render('info.ejs',info)
})
app.post('/login', (req, res) => {
    let login = req.body;
    if (login.username=='admin123'&&login.password=='admin123') {
        res.send('登录成功，假装有页面！');
    }else {
    	res.send('登录失败，假装有页面！')
    }
});

app.post('/regist', (req, res) => {
	let regist = req.body;
	console.log(regist)
	if (regist.password=='admin') {
		res.send('注册成功，假装有页面！');
	}else {
		res.send('注册失败，假装有页面！')
	}
})



app.get('/' ,(req ,res) => {
    res.render('test.html')
})
/*app.get('/fuwushang',(req, res) => {
	console.log(req);
    res.redirect('/fuwushang.html')
})*/
app.get('/position', (req,res) => {
    res.send({
	    code:0,
	    data:pdata
    })
})
app.get('/service', (req,res) => {
	res.send({
		code:0,
		data:sdata})
})
app.listen(3000,() => {
    console.log("server start visit htt://localhost:3000")
});