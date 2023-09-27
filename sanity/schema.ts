import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './Products'
import {Category} from './Category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Category],
}
