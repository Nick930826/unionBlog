/**
 * Created by Nick on 2017-09-23.
 */
const router = require('koa-router')()
let render = require('../render');

router.get('/', async (ctx, next) => {
  ctx.body = await render('index');
})

require('./platform/tc').register(router);
require('./platform/toutiao').register(router);
require('./platform/bole').register(router);
require('./platform/seg').register(router);


module.exports.register = (app) => {
  app.use(router.middleware());
}
