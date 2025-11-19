import { json } from 'co-body'

interface StoredData {
  items: string[]
}

export async function createDocument(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { vbase },
  } = ctx

  // --- 1. Ler body SEM JSON.parse (co-body já retorna objeto)
  let requestBody

  try {
    requestBody = await json(ctx.req)
  } catch {
    ctx.status = 400
    ctx.body = { message: 'Corpo da requisição inválido ou não-JSON.' }
    return
  }

  // --- 2. Buscar ou criar o JSON do VBase
  let storedData: StoredData = { items: [] }

  try {
    storedData = await vbase.getJSON<StoredData>('estagio', 'estagioPath')
  } catch (err) {
    if (err.response?.status !== 404) {
      ctx.status = 500
      ctx.body = {
        message: 'Erro ao acessar VBase',
        error: err.message,
      }
      return
    }
  }

  // Garantir que items existe
  if (!Array.isArray(storedData.items)) {
    storedData.items = []
  }

  // --- 3. Inserir o novo item
  storedData.items.push(requestBody)

  // --- 4. Salvar no VBase
  const response = await vbase.saveJSON('estagio', 'estagioPath', storedData)

  ctx.status = 201
  ctx.body = {
    message: 'Item armazenado com sucesso',
    data: storedData,
    response,
  }

  await next()
}
