import React from 'react'
import { Box } from 'theme-ui'

const DIMENSIONS = {
  width: ['9px', '17px', '17px', '17px'],
  height: ['80px', '110px', '110px', '130px'],
}

const Gradient = ({ colormap, discrete, horizontal }) => {
  const step = (1 / colormap.length) * 100
  const values = colormap.map((d, i) => {
    return `rgb(${d}) ${i * step}% ${
      discrete && i < colormap.length - 1 ? `${(i + 1) * step}%` : ''
    }`
  })

  const css = `linear-gradient(to ${
    horizontal ? 'right' : 'top'
  }, ${values.join(',')})`

  return (
    <Box
      sx={{
        ...(horizontal
          ? { width: DIMENSIONS.height, height: DIMENSIONS.width }
          : { width: DIMENSIONS.width, minHeight: DIMENSIONS.height }),
        border: ({ colors }) => `solid 1px ${colors.hinted}`,
        background: css,
      }}
    />
  )
}

export default Gradient
