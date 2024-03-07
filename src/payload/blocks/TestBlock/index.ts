import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const TestBlock: Block = {
  slug: 'testBlock',
  fields: [invertBackground],
}
