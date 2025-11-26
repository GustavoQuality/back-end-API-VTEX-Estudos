/* eslint-disable prettier/prettier */
import { IOClients } from '@vtex/api'

import Status from './status'
import RickandMorty from './RickandMorty'
import searchProduct from './searchProduct'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get rickandmorty() {
    return this.getOrSet('rickandmorty', RickandMorty)
  }


public get searchProduct() {
    return this.getOrSet('searchProduct', searchProduct)
}
}