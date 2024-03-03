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
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'release_date',
      type: 'date',
      label: 'Release Date',
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating',
      min: 0,
      max: 5,
    },
    {
      name: 'actors',
      type: 'relationship',
      relationTo: 'actors',
      hasMany: true,
      admin: {
        allowCreate: true,
      },
    },
  ],
}

export default Movies
