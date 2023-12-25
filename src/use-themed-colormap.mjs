import { useColorMode } from 'theme-ui'
import useColormap from './use-colormap'

const useThemedColormap = (name, options) => {
  const [mode] = useColorMode()

  let colorMode = mode

  if (!['light', 'dark'].includes(mode)) {
    console.warn(
      `Unexpected \`theme-ui-color-mode\`, ${mode}. Using \`dark\` as fallback.`,
    )
    colorMode = 'dark'
  }
  return useColormap(name, { ...options, mode: colorMode })
}

export default useThemedColormap
