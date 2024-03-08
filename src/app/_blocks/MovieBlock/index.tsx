import React from 'react'
import { StaticImageData } from 'next/image'

import type { Actor, Media as MediaType, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  movie: Movie & {
    actors: Actor | Actor[]
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
      <ul>
        {Array.isArray(props.movie.actors) ? (
          props.movie.actors.map((actor: Actor) => <li key={actor.id}>{actor.first_name}</li>)
        ) : (
          <li key={(props.movie.actors as Actor).id}>{(props.movie.actors as Actor).first_name}</li>
        )}
      </ul>
    </Gutter>
  )
}
