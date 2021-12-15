import { useColorMode } from 'theme-ui'
import useColormap from './use-colormap'

const useThemedColormap = (name, options) => {
  const [mode] = useColorMode()
  return useColormap(name, { ...options, mode: mode })
}

export default useThemedColormap
