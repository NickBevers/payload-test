import type { Block } from 'payload/types'

export const MovieBlock: Block = {
  slug: 'movieBlock',
  fields: [
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
