export async function getDocument(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { vbase },
  } = ctx

  try {
    const response = await vbase.getJSON('estagio', 'estagioPath')

    ctx.status = 200
    ctx.body = { response }
  } catch (err) {
    ctx.status = err.response?.status ?? 500
    ctx.body = {
      message: 'Erro ao ler documento no VBase',
      error: err.message,
    }
  }

  await next()
}
