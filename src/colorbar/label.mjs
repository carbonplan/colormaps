import React from 'react'
import { Box } from 'theme-ui'

const Label = ({ label, units, horizontal }) => (
  <Box sx={!horizontal && { alignSelf: 'flex-end' }}>
    <Box
      sx={{
        fontFamily: 'mono',
        fontSize: ['9px', 0, 0, 1],
        letterSpacing: 'smallcaps',
        textTransform: 'uppercase',
        ...(horizontal
          ? {}
          : {
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              overflow: 'visible',
            }),
      }}
    >
      {label}{' '}
      <Box
        as='span'
        sx={{
          textTransform: 'none',
          color: 'secondary',
          display: 'inline-block',
        }}
      >
        {units}
      </Box>
    </Box>
  </Box>
)
export default Label
