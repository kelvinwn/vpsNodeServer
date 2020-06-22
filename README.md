# API
```
http://127.0.0.1:8081/static/alert.json

http://127.0.0.1:8081/checkConfig

http://127.0.0.1:8081/modifyConfig?high=12000&low=9000
params = {
    high
    low
}
```


# 安装 Express
```
$ cnpm install express --save
```

以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。

以下几个重要的模块是需要与 express 框架一起安装的：
- body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
- cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
- multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```
$ cnpm install body-parser --save
$ cnpm install cookie-parser --save
$ cnpm install multer --save
```

安装完后，我们可以查看下 express 使用的版本号
```
$ cnpm list express
/data/www/node
└── express@4.15.2  -> /Users/tianqixin/www/node/node_modules/.4.15.2@express
```