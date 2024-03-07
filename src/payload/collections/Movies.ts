import type { CollectionConfig } from 'payload/types'

const Movies: CollectionConfig = {
  slug: 'movies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'actor',
      hasMany: true,
      type: 'relationship',
      relationTo: 'actors',
      required: true,
    },
  ],
}

export default Movies
