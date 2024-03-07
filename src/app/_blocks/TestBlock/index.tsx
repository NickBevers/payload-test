import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'testBlock' }> & {
  id?: string
}

export const TestBlock: React.FC<Props> = props => {
  return (
    <div className={classes.testBlock}>
      <Gutter>
        <h1>Test Block</h1>
      </Gutter>
    </div>
  )
}
