import type { CollectionConfig, FieldHook } from 'payload/types'

const fullNameHook: FieldHook = ({ data }) => {
  return `${data.first_name} ${data.last_name}`
}

const Actors: CollectionConfig = {
  slug: 'actors',
  admin: {
    useAsTitle: 'full_name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'first_name',
      type: 'text',
      label: 'First name',
    },
    {
      name: 'last_name',
      type: 'text',
      label: 'Last name',
    },
    {
      name: 'full_name',
      type: 'text',
      label: 'Full name',
      admin: {
        components: {
          Field: () => null,
        },
      },
      hooks: {
        // beforeValidate: [fullNameHook],
        beforeChange: [fullNameHook],
      },
    },
  ],
  timestamps: false,
}

export default Actors
