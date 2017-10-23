const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const candidates = require('./routes/candidates');

const router = new KoaRouter();

router.use(async (ctx, next) => {
  console.log(ctx.state);
  Object.assign(ctx.state, {
    //currentUser: req.headers['x-forwarded-for'],
  });
  return next();
});
router.use('/candidates', candidates.routes());
router.use('/', index.routes());
router.use('/hello', hello.routes());

module.exports = router;
