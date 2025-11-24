export async function RickandMortyByName(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { rickandmorty },
    vtex: {
      route: { params },
    },
  } = ctx

  const name = params.name as string

  try {
    const response = await rickandmorty.searchByName(name)

    ctx.status = 200
    ctx.body = response
  } catch (err) {
    ctx.status = 500
    ctx.body = { message: 'Erro ao buscar por nome', error: err.message }
  }

  await next()
}
