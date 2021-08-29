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
[actions]: https://github.com/carbonplan/components/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://badgen.net/npm/v/@carbonplan/colormaps

This simple package contains a variety of colormaps for our data visualization needs at CarbonPlan. A primary use case is when rendering maps, but other uses will arise as well. Colormaps are designed to be both aesthetically pleasing and perceptually balanced, and all should work in both light and dark mode.

## installation

Add to your package using `npm`

```
npm i @carbonplan/colormaps
```

## usage

To use one of the colormaps call the hook and provide the name

```js
import { useColormap } from '@carbonplan/colormaps'

const colormap = useColormap('warm')
```

This returns an array of colors. The hook depends on the current `theme-ui` mode, so changing the `theme-ui` mode will change the colormap. By default the hook returns 255 colors in `rgb` format. Both the count and the format can be specified. For example, this will return `7` equispaced values from the `warm` colormap in `hex` format.

```js
const colormap = useColormap('warm', 7, 'hex')
```

You can also easily see the list of available colormap names. Useful for building menu selections and similar lists.

```js
import { names } from '@carbonplan/colormaps'

console.log(names)
```




