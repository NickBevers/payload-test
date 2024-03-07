import React from 'react'
import { StaticImageData } from 'next/image'

import type { Actor, Media as MediaType, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  movie: Movie & {
    actor: Actor
  }
}

export const MovieBlock: React.FC<Props> = props => {
  return (
    <Gutter className={classes.root}>
      <Media resource={props.movie.media} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.description}</p>

      <hr />

      <h3>Actor</h3>
      <p>{props.movie.actor.first_name}</p>
      <p>{props.movie.actor.last_name}</p>
    </Gutter>
  )
}
