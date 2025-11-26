/* eslint-disable prettier/prettier */
import { method } from '@vtex/api'
import { createDocument } from '../middlewares/vbase/CreateDocument'
import { getDocument } from '../middlewares/vbase/getDocument'
import { deleteDocument } from '../middlewares/vbase/deleteDocument'
import { RickandMortyById } from '../middlewares/RickandMorty/RickandMortyById'
import { RickandMortyByName } from '../middlewares/RickandMorty/RickandMortyByName'
import searchProduct from '../middlewares/searchProduct'

export const routes = {
  createDocument: method({
    POST: [createDocument],
  }),
  getDocument: method({
    GET: [getDocument],
  }),
  deleteDocument: method({
    DELETE: [deleteDocument],
  }),
  RickandMortyById: method({
    GET: [RickandMortyById],
  }),
  RickandMortyByName: method({
    GET: [RickandMortyByName],
  }),
  searchProductID: method({
    GET: [searchProduct],
  })
}
