import { type SchemaTypeDefinition } from 'sanity'
import podcast from './schemas/podcast'
import episode from './schemas/episode'
import sponsor from './schemas/sponsor'
import category from './schemas/category'
import blockContent from './schemas/blockContent'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [podcast, episode, sponsor, category, blockContent],
}
