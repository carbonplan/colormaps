import chroma from 'chroma-js'
import colormaps from './colormaps.mjs'

const makeColormap = (name, options) => {
  const { count = 255, format = 'rgb', mode = 'dark' } = options

  if (!colormaps.map((d) => d.name).includes(name)) {
    throw Error(`requested colormap '${name}' is not defined`)
  }

  if (!['light', 'dark'].includes(mode)) {
    throw Error(`invalid mode '${mode}'`)
  }

  if (!Number.isInteger(count) || !(count > 0)) {
    throw Error(`invalid count '${count}'`)
  }

  const red = '#f57273'
  const orange = '#e39046'
  const yellow = '#c2b04c'
  const green = '#80ba69'
  const teal = '#64b9c4'
  const blue = '#85a2f7'
  const purple = '#c088de'
  const pink = '#db81ae'
  const grey = '#9aa3b3'

  let start, middle, end

  if (mode === 'dark') {
    start = chroma('#1b1e23').brighten(0)
    middle = chroma('#808080').brighten(0.6)
    end = chroma('#ebebec')
  }

  if (mode === 'light') {
    start = chroma('#FFFFFF').darken(0)
    middle = chroma('#808080').brighten(0.75)
    end = chroma('#1b1e23')
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
    case 'greys':
      correctLightness = true
      ramp = [start, middle]
      break
    case 'fire':
      correctLightness = true
      if (mode === 'dark') {
        ramp = [
          start,
          chroma(red).darken(1),
          chroma.mix(red, orange, 0.45, 'lab').darken(0.5),
          chroma(orange),
          chroma(orange).brighten(0.5),
        ]
      }
      if (mode === 'light') {
        ramp = [
          start,
          chroma(orange).brighten(1),
          chroma.mix(orange, red, 0.25, 'lab').brighten(0.5),
          chroma(red),
          chroma(red).darken(0.5),
        ]
      }
      break
    case 'earth':
      correctLightness = true
      if (mode === 'dark') {
        ramp = [
          start,
          chroma(green).darken(1),
          chroma.mix(green, yellow, 0.45, 'lab').darken(0.5),
          chroma(yellow),
          chroma(yellow).brighten(0.5),
        ]
      }
      if (mode === 'light') {
        ramp = [
          start,
          chroma(yellow).brighten(1),
          chroma.mix(yellow, green, 0.25, 'lab').brighten(0.5),
          chroma(green),
          chroma(green).darken(0.5),
        ]
      }
      break
    case 'water':
      correctLightness = true
      if (mode === 'dark') {
        ramp = [
          start,
          chroma(blue).darken(1),
          chroma.mix(blue, teal, 0.45, 'lab').darken(0.5),
          chroma(teal),
          chroma(teal).brighten(0.5),
        ]
      }
      if (mode === 'light') {
        ramp = [
          start,
          chroma(teal).brighten(1),
          chroma.mix(teal, blue, 0.25, 'lab').brighten(0.5),
          chroma(blue),
          chroma(blue).darken(0.5),
        ]
      }
      break
    case 'heart':
      correctLightness = true
      if (mode === 'dark') {
        ramp = [
          start,
          chroma(purple).darken(1),
          chroma.mix(purple, pink, 0.45, 'lab').darken(0.5),
          chroma(pink),
          chroma(pink).brighten(0.5),
        ]
      }
      if (mode === 'light') {
        ramp = [
          start,
          chroma(pink).brighten(1),
          chroma.mix(pink, purple, 0.25, 'lab').brighten(0.5),
          chroma(purple),
          chroma(purple).darken(0.5),
        ]
      }
      break
    case 'wind':
      correctLightness = true
      if (mode === 'dark') {
        ramp = [
          start,
          chroma(grey).darken(1),
          chroma.mix(grey, grey, 0.45, 'lab').darken(0.5),
          chroma(grey),
          chroma(grey).brighten(0.5),
        ]
      }
      if (mode === 'light') {
        ramp = [
          start,
          chroma(grey).brighten(1),
          chroma.mix(grey, grey, 0.25, 'lab').brighten(0.5),
          chroma(grey),
          chroma(grey).darken(0.5),
        ]
      }
      break
    case 'warm':
      correctLightness = true
      if (mode === 'dark') {
        const preRamp = [
          chroma(purple).darken(1.5),
          chroma(pink).darken(1),
          chroma(red).darken(0.5),
          chroma(orange),
          chroma(yellow).brighten(0.5),
        ]
        const pre = chroma.bezier(preRamp).scale().colors(4)
        ramp = [start, pre[0], pre[1], pre[2], pre[3]]
      }
      if (mode === 'light') {
        const preRamp = [
          chroma(yellow).brighten(1.5),
          chroma(orange).brighten(1),
          chroma(red).brighten(0.5),
          chroma(pink),
          chroma(purple).darken(0.5),
        ]
        const pre = chroma.bezier(preRamp).scale().colors(4)
        ramp = [start, pre[0], pre[1], pre[2], pre[3]]
      }
      break
    case 'cool':
      correctLightness = true
      if (mode === 'dark') {
        const preRamp = [
          chroma(purple).darken(1.5),
          chroma(blue).darken(1),
          chroma(teal).darken(0.5),
          chroma(green),
          chroma(yellow).brighten(0.5),
        ]
        const pre = chroma.bezier(preRamp).scale().colors(4)
        ramp = [start, pre[0], pre[1], pre[2], pre[3]]
      }
      if (mode === 'light') {
        const preRamp = [
          chroma(yellow).brighten(1.5),
          chroma(green).brighten(1),
          chroma(teal).brighten(0.5),
          chroma(blue),
          chroma(purple).darken(0.5),
        ]
        const pre = chroma.bezier(preRamp).scale().colors(4)
        ramp = [start, pre[0], pre[1], pre[2], pre[3]]
      }
      break
    case 'pinkgreen':
      bezier = false
      ramp = [pink, start, green]
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
}

export default makeColormap
