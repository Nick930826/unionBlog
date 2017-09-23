const router = require('koa-router')()
let render = require('../render');

router.get('/', async (ctx, next) => {
  ctx.body = await render('index');
})

module.exports.register = (app) => {
  app.use(router.middleware());
}
