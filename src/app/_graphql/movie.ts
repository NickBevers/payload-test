import { ACTOR } from './actors'
import { MEDIA } from './media'

const MOVIE_FIELDS = `
  id
  title
  description
  ${MEDIA}
  ${ACTOR}
`

export const MOVIE = `movie {
  ${MOVIE_FIELDS}
}`
