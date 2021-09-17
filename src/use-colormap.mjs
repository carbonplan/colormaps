import { useMemo } from 'react'
import { useColorMode } from 'theme-ui'
import colormaps from './colormaps'
import generator from './generator'

const useColormap = (name, count = 255, format = 'rgb') => {
  const [mode, ] = useColorMode()

  let colorMode = mode

  if (!['light', 'dark'].includes(mode)) {
    console.warn(
      `Unexpected \`theme-ui-color-mode\`, ${mode}. Using \`dark\` as fallback.`
    )
    colorMode = 'dark'
  }

  if (!colormaps.map((d) => d.name).includes(name)) {
    throw Error(`requested colormap '${name}' is not defined`)
  }

  const colormap = useMemo(() => {
    return generator(name, colorMode, count, format)
  }, [name, colorMode])

  return colormap
}

export default useColormap
