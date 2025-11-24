import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export default class RickandMorty extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(BASE_URL, ctx, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
    })
  }

  public getById(id: string) {
    return this.http.get(`/${id}`)
  }

  public searchByName(name: string) {
    return this.http.get(`/?name=${name}`)
  }
}
