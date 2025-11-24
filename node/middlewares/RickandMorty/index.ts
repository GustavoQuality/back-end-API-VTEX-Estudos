/* eslint-disable prettier/prettier */

export async function RickandMorty(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { rickandmorty }, // 🔥 nome minúsculo
    vtex: {
      route: { params },
    }
  } = ctx

  const rawId = params.id

  if (!rawId) {
    throw new Error('ID do produto não foi fornecido')
  }

  const id = Array.isArray(rawId) ? rawId[0] : rawId

  try {
    const response = await rickandmorty.getRickandMorty(id)

    ctx.status = 200
    ctx.body = response

  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: 'Erro ao buscar dados na API Rick and Morty',
      error: err.message,
    }
  }

  await next()
}
