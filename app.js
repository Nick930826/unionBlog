/**
 * Created by Nick on 2017-09-23.
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const compress = require('koa-compress');
const mongoose = require('mongoose');

const routerRegister = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
// 静态资源路径配置错误的话，就会找不到bundle.js文件
app.use(require('koa-static')(__dirname + '/dist'))
// Compress
app.use(compress());

// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})



// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
routerRegister.register(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
// mongoose.connect('mongodb://localhost:27017/blog', function(err) {
//   if (err) {
//     console.log('数据库连接失败');
//   } else {
//     console.log('数据库连接成功');
//     app.listen('9002','127.0.0.1',  () => {
//         console.log(process.env.NODE_ENV,'listening on port 9002...');
//     });
//   }
// })
app.listen('80','127.0.0.1',  () => {
    console.log(process.env.PORT,'listening on port 80...');
});

module.exports = app
