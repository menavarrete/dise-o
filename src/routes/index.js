const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  const candidates = await ctx.orm.Candidate.findAll();
  await ctx.render('index', {
    candidates,
    candidatesPath: candidate => ctx.router.url('candidate', { id: candidate.id }),
  });
});

module.exports = router;
