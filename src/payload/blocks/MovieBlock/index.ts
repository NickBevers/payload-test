import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MovieBlock: Block = {
  slug: 'movieBlock',
  fields: [
    invertBackground,
    {
      name: 'movieToShow',
      type: 'relationship',
      label: 'Movies',
      relationTo: 'movies',
      hasMany: false,
      required: true,
      admin: {
        allowCreate: true,
      },
    },
  ],
}
