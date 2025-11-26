/* eslint-disable prettier/prettier */
import { getAppSettings } from "../settings"

export default async function searchProduct(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    vtex: {
      route: { params },
    },
    clients: { searchProduct },
  } = ctx

  const { productId } = params

  if (!productId) {
    throw new Error('productId is required')
  }

  try {
    const { appKeyExample, appTokenExample } = await getAppSettings(ctx)

    const response = await searchProduct.searchProduct(
      productId,
      appKeyExample,
      appTokenExample
    )

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 400
    ctx.body = error
    ctx.body = { message: error.message }
  }

  await next()
}
