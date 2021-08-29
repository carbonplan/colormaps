import { Box, Themed } from 'theme-ui'
import { useColormap } from '@carbonplan/colormaps'

const Sample = ({ name, discrete }) => {
  let values, colors

  if (discrete) {
    const count = 9
    colors = useColormap(name, count)
    values = colors.map((d, i) => {
      if (i == 0) return `rgb(${d}) ${Math.round(100 / count)}%`
      if (i == count - 1) return `rgb(${d}) ${Math.round(100 - 100 / count)}%`
      return `rgb(${d}) ${Math.round((100 / count) * i)}% ${Math.round(
        (100 / count) * (i + 1)
      )}%`
    })
  } else {
    colors = useColormap(name, 255)
    values = colors.map((d, i) => `rgb(${d}) ${(i / 255) * 100}%`)
  }

  const css = `linear-gradient(to right, ${values.join(',')})`
  return (
    <Box>
      <Themed.inlineCode>{name}</Themed.inlineCode>
      <Box
        sx={{
          mt: [2, 2, 2, 3],
          mb: [3, 3, 3, 4],
          height: '30px',
          width: '100%',
          border: ({ colors }) => `solid 0px ${colors.hinted}`,
          background: css,
        }}
      />
    </Box>
  )
}

export default Sample
