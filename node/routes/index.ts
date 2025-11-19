import { method } from '@vtex/api'
import { createDocument } from '../middlewares/vbase/CreateDocument'
import { getDocument } from '../middlewares/vbase/getDocument'
import { deleteDocument } from '../middlewares/vbase/deleteDocument'

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
}
