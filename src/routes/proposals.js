const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('proposals/', '/', async (ctx) => {
  const candidate  = ctx.state;
  const proposals = await candidate.getProposals();
  await ctx.render('proposals/index', {
    candidate,
    proposals,
    proposalPath: proposal =>
      ctx.router.url('proposal', { id: proposal.id }),
  });
});


router.get('proposal', '/:id', async (ctx) => {
  const Lecreo = await ctx.orm.Lecreo.findOne({ where: {ip: ctx.headers['x-forwarded-for'], ProposalId: ctx.params.id} });
  const { candidate } = ctx.state;
  const proposal = await ctx.orm.Proposal.findById(ctx.params.id);
  const comments = await ctx.orm.Comment.findAll({
        where: { element: ctx.params.id },
      });
  const nLecreo = await ctx.orm.Lecreo.howManyLecreo(proposal.id, 1);
  const nNoLecreo = await ctx.orm.Lecreo.howManyLecreo(proposal.id, 0);

  console.log(nLecreo);

    await ctx.render('proposals/show', {
      candidate,
      proposal,
      comments,
      hasLecreo : !!Lecreo,
      Lecreo,
      nLecreo,
      nNoLecreo,
      CommentPath: ctx.router.url('comment_Create', {id: proposal.id , cId: candidate.id}),
      LecreoPath: ctx.router.url('Lecreo_Create', {id: proposal.id , cId: candidate.id}),
      LecreoChangePath : ctx.router.url('Lecreo_Change', {id: proposal.id , cId: candidate.id}),
    });
  });

router.get('proposalNew', '/new', async (ctx) => {
  const { candidate } = ctx.state;
  const proposal = ctx.orm.Proposal.build();
  await ctx.render('proposal/new', {
    candidate,
    proposal,
    submitProposalPath: ctx.router.url('proposalCreate', proposal.id),
  });
});

router.post('proposalCreate', '/', async (ctx) => {
  const { candidate } = ctx.state;
  try {
    const proposal = await candidate.createProposal(ctx.request.body);
    ctx.redirect(ctx.router.url('proposals', { id: proposal.id }));
  } catch (validationError) {
    await ctx.render('proposal/new', {
      candidate,
      proposal: ctx.orm.Proposal.build(ctx.request.body),
      errors: validationError.errors,
      submitProposalPath: ctx.router.url('proposalCreate', proposal.id),
    });
  }
});

router.post('comment_Create', '/:id/comment', async (ctx) => {
  const { candidate } = ctx.state;
  const proposal = await ctx.orm.Proposal.findById(ctx.params.id);
  await ctx.orm.Comment.create({element: proposal.id, body: ctx.request.body.comment });
  ctx.redirect(ctx.router.url('proposal', {cId: candidate.id, id: proposal.id }));
});

router.post('Lecreo_Create', '/:id/lecreocreate', async (ctx) => {
  const { candidate } = ctx.state;
  await ctx.orm.Lecreo.create({ip: ctx.headers['x-forwarded-for'], ProposalId: ctx.params.id, value: ctx.request.body.value});
  ctx.redirect(ctx.router.url('proposal', {cId: candidate.id, id: ctx.params.id }));
});

router.post('Lecreo_Change', '/:id/lecreochange', async (ctx) => {
  const { candidate } = ctx.state;
  const lecreo = await ctx.orm.Lecreo.findOne({ where: {ip: ctx.headers['x-forwarded-for'], ProposalId: ctx.params.id} });
  const value_changed = Math.abs(lecreo.value - 1);
  await lecreo.update({ip: ctx.headers['x-forwarded-for'], ProposalId: ctx.params.id, value: value_changed});
  ctx.redirect(ctx.router.url('proposal', {cId: candidate.id, id: ctx.params.id }));
});

module.exports = router;



/*
router.get('examQuestionsEdit', '/:id/edit', checkPermissions, async (ctx) => {
  const { exam } = ctx.state;
  const question = await ctx.orm.Question.findById(ctx.params.id);
  await ctx.render('questions/edit', {
    exam,
    question,
    submitQuestionPath: ctx.router.url('examQuestionsUpdate', exam.id, question.id),
  });
});


router.patch('examQuestionsUpdate', '/:id', checkPermissions, async (ctx) => {
  const { exam } = ctx.state;
  const question = await ctx.orm.Question.findById(ctx.params.id);
  try {
    await question.update(ctx.request.body);
    ctx.redirect(ctx.router.url('examQuestion', { examId: exam.id, id: question.id }));
    console.log('updated');
  } catch (validationError) {
    console.log('error');
    return ctx.render('questions/edit', {
      exam,
      question,
      errors: validationError.errors,
      submitQuestionPath: ctx.router.url('examQuestionsUpdate', exam.id, question.id),
    });
  }
});

*/
