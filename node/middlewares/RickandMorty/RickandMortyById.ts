export async function RickandMortyById(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { rickandmorty },
    vtex: {
      route: { params },
    },
  } = ctx

  const id = params.id as string

  try {
    const response = await rickandmorty.getById(id)

    ctx.status = 200
    ctx.body = response
  } catch (err) {
    ctx.status = 500
    ctx.body = { message: 'Erro ao buscar por ID', error: err.message }
  }

  await next()
}
