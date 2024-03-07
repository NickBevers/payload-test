import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MovieBlock: Block = {
  slug: 'movieBlock',
  fields: [
    invertBackground,
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}
