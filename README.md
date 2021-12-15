<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / colormaps

**color scales for data visualization**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
![NPM Version][]

[github]: https://github.com/carbonplan/colormaps
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/colormaps/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/colormaps/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://badgen.net/npm/v/@carbonplan/colormaps

This simple package contains a variety of colormaps for our data visualization needs at CarbonPlan. A primary use case is when rendering maps, but other uses will arise as well. Colormaps are designed to be both aesthetically pleasing and perceptually balanced, and all should work in both light and dark mode.

See them demoed at [`design.carbonplan.org/colormaps`](https://design.carbonplan.org/colormaps).

## installation

Add to your package using `npm`

```
npm i @carbonplan/colormaps
```

## usage

The primary entry point is the `makeColormap` function, which just requires a name.

```js
import { makeColormap } from '@carbonplan/colormaps'

const colormap = makeColormap('warm')
```

This returns an array of colors. You can pass options including the `count` of colors, the mode (`light` or `dark`), and the format (`rgb` or `hex`). For example, the following will return `7` equispaced values from the `warm` colormap in `hex` format and `light` mode.

```
const colormap = makeColormap('warm', {count: 7, mode: 'light', format: 'hex'})
```

In a React context, you can also use the provided hook.

```js
import { useColormap } from '@carbonplan/colormaps'

const colormap = useColormap('warm')
```

This hook has as dependencies the name as well as any options.

Finally, for use with `theme-ui`, we offer a hook that depends on the current `theme-ui` mode, so that changing the `theme-ui` mode will change the colormap.

```js
import { useThemedColormap } from '@carbonplan/colormaps'

const colormap = useThemedColormap('warm')
```

You can also retrieve a list of available colormaps with both names and types. Useful for building menu selections and similar listings.

```js
import { colormaps } from '@carbonplan/colormaps'

console.log(colormaps.filter((d) => d.type === 'diverging').map((d) => d.name))
```
