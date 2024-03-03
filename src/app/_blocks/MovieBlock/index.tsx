import React from 'react'
import { StaticImageData } from 'next/image'

import type { Media as MediaType, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

// type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
//   movieToShow: Movie
//   staticImage?: StaticImageData
// }

// type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }>

type Props = {
  movieToShow: Movie
}

export const MovieBlock: React.FC<Props> = props => {
  const { movieToShow } = props as Props & { movieToShow: Movie }

  return (
    <div className={classes.movieBlock__container}>
      {movieToShow.id}
      <Gutter>
        <div className={classes.movieBlock}>
          <div className={classes.movieBlock__media}>
            <Media resource={movieToShow.poster as MediaType} alt={movieToShow.title} />
          </div>
          <div className={classes.movieBlock__content}>
            <h2>{movieToShow.title}</h2>
            <p>{movieToShow.description}</p>
          </div>
        </div>
      </Gutter>
    </div>
  )
}
