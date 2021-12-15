import { useMemo } from 'react'
import makeColormap from './make-colormap'

const useColormap = (name, options) => {
  const colormap = useMemo(() => {
    return makeColormap(name, options)
  }, [name, options?.count, options?.format, options?.mode])

  return colormap
}

export default useColormap
