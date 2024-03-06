export const MOVIE_FIELDS = `
  id
  title
  releaseDate
  poster{
    id
    url
  }
`

export const MOVIE = `movieToShow {
  ${MOVIE_FIELDS}
}`
