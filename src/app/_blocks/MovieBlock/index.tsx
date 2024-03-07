import React from 'react'
import { StaticImageData } from 'next/image'

import type { Media as MediaType, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  title: string
  description: string
}

export const MovieBlock: React.FC<Props> = props => {
  const { title, description } = props

  return (
    <Gutter className={classes.root}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Gutter>
  )
}
