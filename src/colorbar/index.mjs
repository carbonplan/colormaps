import React from 'react'
import { Box, Flex } from 'theme-ui'
import useColormap from './use-colormap'

import Gradient from './gradient.mjs'
import Label from './label.mjs'

const ColorbarInner = ({
  sx,
  label,
  colormap,
  clim,
  units,
  format,
  horizontal,
}) => {
  const climMin = (
    <Box
      sx={{
        fontFamily: 'mono',
        fontSize: ['9px', 0, 0, 1],
        letterSpacing: 'smallcaps',
        textTransform: 'uppercase',
        ml: horizontal ? '10px' : 0,
        mb: horizontal ? 0 : '-5px',
      }}
    >
      {format(clim[0])}
    </Box>
  )
  const climMax = (
    <Box
      sx={{
        fontFamily: 'mono',
        fontSize: ['9px', 0, 0, 1],
        letterSpacing: 'smallcaps',
        textTransform: 'uppercase',
        mt: horizontal ? 0 : '-5px',
      }}
    >
      {format(clim[1])}
    </Box>
  )

  return (
    <Flex
      sx={{
        ...sx,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: [2],
      }}
    >
      <Label label={label} units={units} horizontal={horizontal} />

      {horizontal && climMin}
      <Gradient colormap={colormap} horizontal={horizontal} />
      {horizontal && climMax}

      {!horizontal && (
        <Flex
          sx={{
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
          }}
        >
          {climMin}
          {climMax}
        </Flex>
      )}
    </Flex>
  )
}

const DerivedColorbar = ({ colormap, ...props }) => {
  const derivedColormap = useColormap(colormap)

  return <ColorbarInner {...props} colormap={derivedColormap} />
}

const Colorbar = ({ colormap, ...props }) => {
  if (Array.isArray(colormap)) {
    return <ColorbarInner colormap={colormap} {...props} />
  } else {
    return <DerivedColorbar colormap={colormap} {...props} />
  }
}

Colorbar.defaultProps = {
  format: (d) => d,
  horizontal: false,
}

export default Colorbar
