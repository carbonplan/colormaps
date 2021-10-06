import React from 'react'
import { Box } from 'theme-ui'

const DIMENSIONS = {
  width: ['9px', '17px', '17px', '17px'],
  height: ['80px', '110px', '110px', '130px'],
}

const Gradient = ({ colormap, horizontal }) => {
  const values = colormap.map((d, i) => `rgb(${d}) ${(i / 255) * 100}%`)

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
