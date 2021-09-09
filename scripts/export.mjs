import fs from 'fs'
import generator from '../src/generator.mjs'
import colormaps from '../src/colormaps.mjs'

const out = {}

colormaps.forEach((d) => {
  out[d.name + '-light'] = generator(d.name, 'light', 256, 'rgb').map((d) =>
    d.map((d) => parseFloat((d / 255).toFixed(6)))
  )
  out[d.name + '-dark'] = generator(d.name, 'dark', 256, 'rgb').map((d) =>
    d.map((d) => parseFloat((d / 255).toFixed(6)))
  )
})

fs.writeFileSync('export/colormaps.json', JSON.stringify(out))
