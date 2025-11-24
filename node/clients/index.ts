import { IOClients } from '@vtex/api'

import Status from './status'
import RickandMorty from './RickandMorty'

export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  // 🔥 nome do client SEMPRE minúsculo
  public get rickandmorty() {
    return this.getOrSet('rickandmorty', RickandMorty)
  }
}
