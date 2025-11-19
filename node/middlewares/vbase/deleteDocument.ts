export async function deleteDocument(
  ctx: Context,
  next: () => Promise<unknown>
) {
  // Desestruturação do cliente 'vbase' do contexto
  const {
    clients: { vbase },
  } = ctx

  await vbase.deleteFile('estagio', 'estagioPath')

  ctx.status = 201
  ctx.body = {
    message: 'Documento deletado com sucesso',
  }

  await next()
}
