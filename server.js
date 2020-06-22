var express = require('express');
var app = express();
var fs = require("fs");

//启动静态服务 
app.use('/static', express.static('static'));

//检查配置
app.get('/checkConfig', function (req, res) {
	var data = fs.readFileSync('./static/alert.json', 'utf8');
	res.end(data)
})

//修改配置
app.get('/modifyConfig', function (req, res) {

	var data = fs.readFileSync('./static/alert.json', 'utf8');
	data = JSON.parse(data);

	if(req.query.high) {
		data['topPrice'] = Number(req.query.high)
		console.log('reset topPrice to %s', req.query.high)
	}
	if(req.query.low) {
		data['lowPrice'] = Number(req.query.low)
		console.log('reset lowPrice to %s', req.query.low)
	}
	if(!req.query.high && !req.query.low) {
		console.log('params !high && !low')
	}

	var str = JSON.stringify(data,"","\t")
	fs.writeFile('./static/alert.json', str, function(err){
		if(err) {
			console.log('write file failed: ' + err)
		}
	});

	res.end(str);
})

//启动服务 
var server = app.listen(8081, function () {

  //var host = server.address().address
  var host = '127.0.0.1'
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})