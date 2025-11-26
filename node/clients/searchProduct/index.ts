/* eslint-disable prettier/prettier */
import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

const BASE_URL = 'https://acctglobal.vtexcommercestable.com.br/api/catalog/pvt/product'

export default class searchProduct extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(BASE_URL, ctx, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
    })
  }

  public async searchProduct(
    productId: string | string[],
    appKeyExample: string,
    appTokenExample: string
  ) {
    return this.http.get(
      `/${productId}`,
      {
        headers: {
          'X-VTEX-API-AppKey': appKeyExample,
          'X-VTEX-API-AppToken': appTokenExample,
        },
      }
    )
  }

}
