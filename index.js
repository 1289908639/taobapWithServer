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
app.engine('art', require('express-art-template'));
app.set('view options', {
	debug: process.env.NODE_ENV !== 'production'
});

app.use(express.static("public"));



let position = Mock.mock({
	code:0,
	data:pdata
})

app.get('/' ,(req ,res) => {
    res.render('test.html')
})
app.get('/position', (req,res) => {
    res.send(position)
})
app.get('/service', (req,res) => {
	res.send({
		code:0,
		data:sdata})
})
app.listen(3000);