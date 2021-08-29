import { Box } from 'theme-ui'
import Section from '../components/section'
import Sample from '../components/sample'

# Colormaps

We use colormaps for a variety of data visualization needs at CarbonPlan, especially maps. Here we document a family of colormaps we have been developing. Are all designed for use with both light and dark mode. They attempt to be both aesthetically pleasing and perceptually well-blanaced.

## Sequential single-hue

<Box>
  {[
    'reds',
    'oranges',
    'yellows',
    'greens',
    'teals',
    'blues',
    'purples',
    'pinks',
    'coolgreys',
    'greys',
  ].map((d) => (
    <Sample key={d} name={d} />
  ))}
</Box>

## Sequential multi-hue

<Box>
  {['redorange', 'yellowgreen', 'tealblue', 'purplepink', 'warm', 'cool'].map(
    (d) => (
      <Sample key={d} name={d} />
    )
  )}
</Box>

## Diverging

<Box>
  {[
    'redgrey',
    'orangegrey',
    'yellowgrey',
    'greengrey',
    'tealgrey',
    'bluegrey',
    'purplegrey',
    'pinkgrey',
    'redteal',
    'orangeblue',
    'yellowpurple',
    'greenpink',
  ].map((d) => (
    <Sample key={d} name={d} />
  ))}
</Box>

## Cyclical

<Box>
  {['rainbow', 'sinebow'].map((d) => (
    <Sample key={d} name={d} />
  ))}
</Box>

export default ({children}) => <Section>{children}</Section

>
