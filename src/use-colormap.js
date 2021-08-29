import { useMemo } from 'react'
import { useThemeUI, useColorMode } from 'theme-ui'
import chroma from 'chroma-js'
import names from './names'

const useColormap = (name, count = 255, format = 'rgb') => {
  const {
    theme: { rawColors: colors },
  } = useThemeUI()
  const [mode] = useColorMode()

  if (!names.includes(name)) {
    throw Error(`requested colormap '${name}' is not defined`)
  }

  const colormap = useMemo(() => {
    const red = '#f57273'
    const orange = '#e39046'
    const yellow = '#c2b04c'
    const green = '#80ba69'
    const teal = '#64b9c4'
    const blue = '#85a2f7'
    const purple = '#c088de'
    const pink = '#db81ae'
    const grey = '#9aa3b3'

    const { background, secondary } = colors
    let start, middle

    if (mode === 'dark') {
      start = chroma(background).brighten(0.2)
      middle = chroma(secondary).brighten(0.6)
    }

    if (mode === 'light') {
      start = chroma(background).darken(0.25)
      middle = chroma(secondary).brighten(0.75)
    }

    let ramp
    let bezier = true
    let correctLightness = false

    switch (name) {
      case 'reds':
        correctLightness = true
        ramp = [start, red]
        break
      case 'oranges':
        correctLightness = true
        ramp = [start, orange]
        break
      case 'yellows':
        correctLightness = true
        ramp = [start, yellow]
        break
      case 'greens':
        correctLightness = true
        ramp = [start, green]
        break
      case 'teals':
        correctLightness = true
        ramp = [start, teal]
        break
      case 'blues':
        correctLightness = true
        ramp = [start, blue]
        break
      case 'purples':
        correctLightness = true
        ramp = [start, purple]
        break
      case 'pinks':
        correctLightness = true
        ramp = [start, pink]
        break
      case 'coolgreys':
        correctLightness = true
        ramp = [start, grey]
        break
      case 'greys':
        correctLightness = true
        ramp = [start, middle]
        break
      case 'redorange':
        correctLightness = true
        if (mode === 'dark') {
          ramp = [start, chroma(red).darken(1), chroma(orange)]
        }
        if (mode === 'light') {
          ramp = [start, chroma(red).brighten(1), chroma(orange)]
        }
        break
      case 'yellowgreen':
        correctLightness = true
        if (mode === 'dark') {
          ramp = [start, chroma(yellow).darken(1), chroma(green)]
        }
        if (mode === 'light') {
          ramp = [start, chroma(yellow).brighten(1), chroma(green)]
        }
        break
      case 'tealblue':
        correctLightness = true
        if (mode === 'dark') {
          ramp = [start, chroma(teal).darken(1), chroma(blue)]
        }
        if (mode === 'light') {
          ramp = [start, chroma(teal).brighten(1), chroma(blue)]
        }
        break
      case 'purplepink':
        correctLightness = true
        if (mode === 'dark') {
          ramp = [start, chroma(purple).darken(1), chroma(pink)]
        }
        if (mode === 'light') {
          ramp = [start, chroma(purple).brighten(1), chroma(pink)]
        }
        break
      case 'warm':
        if (mode === 'dark') {
          ramp = [
            chroma(purple).darken(2),
            chroma(pink).darken(1),
            red,
            chroma(orange),
            chroma(yellow),
          ]
        }
        if (mode === 'light') {
          ramp = [
            chroma(purple),
            chroma(pink),
            red,
            chroma(orange).brighten(1),
            chroma(yellow).brighten(1.5),
          ]
        }
        break
      case 'cool':
        if (mode === 'dark') {
          ramp = [
            chroma(purple).darken(2),
            chroma(blue).darken(1),
            teal,
            chroma(green),
            chroma(yellow),
          ]
        }
        if (mode === 'light') {
          ramp = [
            chroma(purple),
            chroma(blue),
            teal,
            chroma(green).brighten(1),
            chroma(yellow).brighten(1.5),
          ]
        }
        break
      case 'redteal':
        bezier = false
        ramp = [red, start, teal]
        break
      case 'orangeblue':
        bezier = false
        ramp = [orange, start, blue]
        break
      case 'yellowpurple':
        bezier = false
        ramp = [yellow, start, purple]
        break
      case 'greenpink':
        bezier = false
        ramp = [green, start, pink]
        break
      case 'redgrey':
        bezier = false
        ramp = [red, start, middle]
        break
      case 'orangegrey':
        bezier = false
        ramp = [orange, start, middle]
        break
      case 'yellowgrey':
        bezier = false
        ramp = [yellow, start, middle]
        break
      case 'greengrey':
        bezier = false
        ramp = [green, start, middle]
        break
      case 'tealgrey':
        bezier = false
        ramp = [teal, start, middle]
        break
      case 'bluegrey':
        bezier = false
        ramp = [blue, start, middle]
        break
      case 'purplegrey':
        bezier = false
        ramp = [purple, start, middle]
        break
      case 'pinkgrey':
        bezier = false
        ramp = [pink, start, middle]
        break
      case 'rainbow':
        bezier = false
        if (mode === 'dark') {
          ramp = [
            chroma(purple).darken(0.1),
            chroma(blue).darken(0.1),
            chroma(teal).darken(0.1),
            chroma(green).darken(0.1),
            chroma(yellow).darken(0.1),
            chroma(orange).darken(0.1),
            chroma(red).darken(0.1),
            chroma(pink).darken(0.1),
          ]
        }
        if (mode === 'light') {
          ramp = [
            chroma(purple),
            chroma(blue),
            chroma(teal),
            chroma(green),
            chroma(yellow),
            chroma(orange),
            chroma(red),
            chroma(pink),
          ]
        }
        break
      case 'sinebow':
        bezier = false
        if (mode === 'dark') {
          ramp = [
            chroma(red).darken(0.1),
            chroma(orange).darken(0.1),
            chroma(yellow).darken(0.1),
            chroma(green).darken(0.1),
            chroma(teal).darken(0.1),
            chroma(blue).darken(0.1),
            chroma(purple).darken(0.1),
            chroma(pink).darken(0.1),
          ]
        }
        if (mode === 'light') {
          ramp = [
            chroma(red),
            chroma(orange),
            chroma(yellow),
            chroma(green),
            chroma(teal),
            chroma(blue),
            chroma(purple),
            chroma(pink),
          ]
        }
        break
    }

    let scale
    if (bezier) {
      scale = chroma.bezier(ramp).scale()
    } else {
      scale = chroma.scale(ramp).mode('lab')
    }
    if (correctLightness) {
      scale = scale.correctLightness()
    }

    return scale.colors(count, format)
  }, [name, colors, mode])

  return colormap
}

export default useColormap
