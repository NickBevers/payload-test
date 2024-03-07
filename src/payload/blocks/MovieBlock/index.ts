import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MovieBlock: Block = {
  slug: 'movieBlock',
  fields: [
    invertBackground,
    {
      name: 'movie',
      type: 'relationship',
      relationTo: 'movies',
      required: true,
    },
  ],
}
