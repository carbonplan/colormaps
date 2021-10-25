import React from 'react'
import { Box, Flex } from 'theme-ui'
import useColormap from '../use-colormap'

import Gradient from './gradient'
import Label from './label'

const sx = {
  clim: {
    fontFamily: 'mono',
    fontSize: ['9px', 0, 0, 1],
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
}

const ColorbarInner = ({
  label,
  colormap,
  clim,
  discrete,
  units,
  format,
  horizontal,
  ...props
}) => {
  const climMin = (
    <Box
      sx={{
        ...sx.clim,
        ml: horizontal ? '10px' : 0,
        mb: horizontal ? 0 : '-7px',
      }}
    >
      {format(clim[0])}
    </Box>
  )
  const climMax = (
    <Box
      sx={{
        ...sx.clim,
        mt: horizontal ? 0 : '-7px',
      }}
    >
      {format(clim[1])}
    </Box>
  )

  return (
    <Flex
      sx={{
        ...props.sx,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: [2],
      }}
    >
      <Label label={label} units={units} horizontal={horizontal} />

      {horizontal && climMin}
      <Gradient
        colormap={colormap}
        horizontal={horizontal}
        discrete={discrete}
      />
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
  } else if (typeof colormap === 'string') {
    return <DerivedColorbar colormap={colormap} {...props} />
  } else {
    throw new Error(
      `Unexpected colormap ${colormap} provided. Must be either string or array of colormap values.`
    )
  }
}

Colorbar.defaultProps = {
  format: (d) => d,
  horizontal: false,
}

export default Colorbar
