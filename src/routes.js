const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const candidates = require('./routes/candidates');

const router = new KoaRouter();

router.use(async (ctx, next) => {
  //ctx.headers['X-Forwarded-For'] = '192.168.1.1';
  Object.assign(ctx.state, {
    //currentUser: ctx.headers['x-forwarded-for'],
  });
  return next();
});
router.use('/candidates', candidates.routes());
router.use('/', index.routes());
router.use('/hello', hello.routes());

module.exports = router;
