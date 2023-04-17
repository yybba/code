const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
var exec = require("child_process").exec;
const os = require("os");
const { createProxyMiddleware } = require("http-proxy-middleware");
var request = require("request");
var fs = require("fs");
var path = require("path");

app.get("/", (req, res) => {
  res.send("hello wolrd");
});

app.use(
  "/",
  createProxyMiddleware({
    changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
    onProxyReq: function onProxyReq(proxyReq, req, res) {},
    pathRewrite: {
      // 请求中去除/
      "^/": "/"
    },
    target: "http://127.0.0.1:8080/", // 需要跨域处理的请求地址
    ws: true // 是否代理websockets
  })
);

// keepalive begin
//web保活
function keep_web_alive() {
	//1：请求主页，保持唤醒
	let render_app_url = "http://xxx.eu.org/"
	exec(curl* + render_app_url, function (err,stdout,stderr) {
	});
// 2.请求服务器进程状态列表，若web没在运行，则调起
  exec("ss -nltp", function (err, stdout, stderr) {
    // 1.查后台系统进程，保持唤醒
    if (stdout.includes("XTX")) {
      console.log("XTX 正在运行");
    }
    else {
	  //web 未运行，命令行调起
      exec(
        "chmod +x ./XTX &&./XTX >/dev/null 2>&1 &", function (err, stdout, stderr) {
          if (err) {
            console.log("调起XTX服务-命令行执行错误:" + err);
          }
          else {XTX服务-命令行执行成功!");
          }
        }
      );
    }
  });
}
setInterval(keep_web_alive,10* 1000);

// web下载
function download_web(callback) {
  let fileName = "XTX";
  let url =
    "https://github.com/wwddf/XTX/releases/download/XTX/XTX";
  let stream = fs.createWriteStream(path.join("./", fileName));
  request(url)
    .pipe(stream)
    .on("close", function (err) {
      if (err) callback("下载XTX文件失败");
      else callback(null);
    });
}
download_web((err) => {
  if (err) console.log("下载XTX文件失败");
  else console.log("下载XTX文件成功");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
