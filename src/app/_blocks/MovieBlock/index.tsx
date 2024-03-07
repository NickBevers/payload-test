import React from 'react'
import { StaticImageData } from 'next/image'

import type { Media as MediaType, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  media: MediaType
  movie: Movie
}

export const MovieBlock: React.FC<Props> = props => {
  return (
    <Gutter className={classes.root}>
      <Media resource={props.media} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.description}</p>
    </Gutter>
  )
}
