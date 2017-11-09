const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  const candidates = await ctx.orm.Candidate.findAll();
  for (var i in candidates){
    candidates[i].Lecreo = 0;
    candidates[i].NoLecreo = 0;
    candidates[i].proposals = await ctx.orm.Proposal.findAll({where: {candidateId: candidates[i].id}});
    for (var j in candidates[i].proposals){
      const lecreo = await ctx.orm.Lecreo.howManyLecreo(candidates[i].proposals[j].id, 1);
      const nolecreo = await ctx.orm.Lecreo.howManyLecreo(candidates[i].proposals[j].id, 0);
      candidates[i].Lecreo += lecreo.count;
      candidates[i].NoLecreo += nolecreo.count;
    }
  }
  await ctx.render('index', {
    candidates,
    candidatesPath: candidate => ctx.router.url('candidate', { id: candidate.id }),
  });
});

module.exports = router;
