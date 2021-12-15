import fs from 'fs'
import colormaps from '../src/colormaps.mjs'
import makeColormap from '../src/make-colormap.mjs'

const out = {}

colormaps.forEach((d) => {
  out[d.name + '-light'] = makeColormap(d.name, 'light', 256, 'rgb').map((d) =>
    d.map((d) => parseFloat((d / 255).toFixed(6)))
  )
  out[d.name + '-dark'] = makeColormap(d.name, 'dark', 256, 'rgb').map((d) =>
    d.map((d) => parseFloat((d / 255).toFixed(6)))
  )
})

fs.writeFileSync('export/colormaps.json', JSON.stringify(out))
