import { useMemo } from 'react'
import { useColorMode } from 'theme-ui'
import colormaps from './colormaps'
import generator from './generator'

const useColormap = (name, count = 255, format = 'rgb') => {
  const [mode] = useColorMode()

  if (!colormaps.map((d) => d.name).includes(name)) {
    throw Error(`requested colormap '${name}' is not defined`)
  }

  const colormap = useMemo(() => {
    return generator(name, mode, count, format)
  }, [name, mode])

  return colormap
}

export default useColormap
