const KoaRouter = require('koa-router');
const proposals = require('./proposals');

const router = new KoaRouter();

/*
router.get('/', async (ctx) => {
  const candidates = await ctx.orm.Candidate.findAll();
  await ctx.render('candidates/index', {
    candidates,
    candidatesPath: candidate => ctx.router.url('candidate', { id: candidate.id }),
  });
});
*/

router.get('candidate', '/:id', async (ctx) => {
  const clientIP = ctx.headers['x-forwarded-for'];
  console.log("\n\n\n\n\n\n\n\n\n");
  console.log("IPECITA: ", clientIP);
  console.log(ctx.headers);
  console.log("\n\n\n\n\n\n\n\n\n");
  const candidate = await ctx.orm.Candidate.findById(ctx.params.id);
  ctx.assert(candidate, 404, 'No encontré el candidato presidencial pedido', { id: ctx.params.id });
  //acá hay q agregar lo que se necesite para la vista,
  const proposals = await ctx.orm.Proposal.findProposalsByCandidate(ctx.params.id);
  for (var i in proposals){
    proposals[i].Lecreo = await ctx.orm.Lecreo.howManyLecreo(proposals[i].id, 1);
    proposals[i].NoLecreo = await ctx.orm.Lecreo.howManyLecreo(proposals[i].id, 0);
  }
  //console.log(proposals);
  await ctx.render('candidates/show', {
    buildProposalPath: proposal => ctx.router.url('proposal', {cId: ctx.params.id, id: proposal.id }),
    candidate,
    proposals,
  });
});

router.get('candidateNew', '/new', async (ctx) => {
    console.log("estoy acá");
    const candidate = ctx.orm.Candidate.build();
    await ctx.render('candidates/new', {
      candidate,
      createCandidatePath: ctx.router.url('candidateCreate'),
    });
  });

router.post('candidateCreate', '/', async (ctx) => {
    try {
      const candidate = await ctx.orm.Candidate.create(ctx.request.body);
      //sendWelcomeEmail(ctx, user);
      ctx.redirect(ctx.router.url('candidates'));
    } catch (validationError) {
      await ctx.render('candidates/new', {
        candidate: ctx.orm.Candidate.build(ctx.request.body),
        errors: validationError.errors,
        createCandidatePath: ctx.router.url('candidatesCreate'),
      });
    }
  });

router.patch('candidateUpdate', '/:id', async (ctx) => {
const candidate = await ctx.orm.Candidate.findById(ctx.params.id);
try {
    await candidate.update(ctx.request.body);
    ctx.redirect(ctx.router.url('candidate', { id: candidate.id }));
} catch (validationError) {
    await ctx.render('candidates/edit', {
    candidate,
    errors: validationError.errors,
    updateCandidatePath: ctx.router.url('candidateUpdate', { id: candidate.id }),
    });
}
});

router.delete('candidateDelete', '/:id', async (ctx) => {
    const candidate = await ctx.orm.Candidate.findById(ctx.params.id);
    try {
      await candidate.destroy();
      ctx.redirect(ctx.router.url('candidates'));
    } catch (validationError) {
      console.log(validationError);
    }
  });

router.use(
  '/:cId/proposals',
  async (ctx, next) => {
    ctx.state.candidate = await ctx.orm.Candidate.findById(ctx.params.cId);
    await next();
  },
  proposals.routes(),
);

module.exports = router;
