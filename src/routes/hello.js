const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('hello', '/', async (ctx) => {
  await ctx.render('hello/index', {
    nameUrl: name => ctx.router.url('hello.name', name),
    notice: ctx.flashMessage.notice,
  });
});

router.post('hello', '/', async (ctx) => {
  console.log(ctx.state.currentUser);s
  ctx.redirect(router.url('hello'));
});

router.get('hello.file', '/file', (ctx) => {
  ctx.response.type = 'image/png';
});

router.get('hello.name', '/:name', (ctx) => {
  ctx.body = { message: `Hello ${ctx.params.name}!` };
});

module.exports = router;
