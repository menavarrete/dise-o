const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const candidates = require('./routes/candidates');
const proposals = require('./routes/proposals');

const router = new KoaRouter();

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
  });
  return next();
});
router.use('/candidates', candidates.routes());
router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/proposals',proposals.routes());


module.exports = router;
