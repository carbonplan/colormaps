<p align="left" >
<a href='https://carbonplan.org'>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://carbonplan-assets.s3.amazonaws.com/monogram/light-small.png">
  <img alt="CarbonPlan monogram." height="48" src="https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png">
</picture>
</a>
</p>

# carbonplan / colormaps

**color scales for data visualization**

[![CI](https://github.com/carbonplan/colormaps/actions/workflows/main.yml/badge.svg)](https://github.com/carbonplan/colormaps/actions/workflows/main.yml)
![NPM Version](https://img.shields.io/npm/v/@carbonplan/colormaps)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This simple package contains a variety of colormaps for our data visualization needs at CarbonPlan. A primary use case is when rendering maps, but other uses will arise as well. Colormaps are designed to be both aesthetically pleasing and perceptually balanced, and all should work in both light and dark mode.

See them demoed at [`carbonplan.org/design/colormaps`](https://carbonplan.org/design/colormaps).

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

## note

We are currently pinning to version 2.2 of `chroma-js` due to a [change](https://github.com/gka/chroma.js/commit/a0245db2da9b98b68056a212d1c0afdeb3250e0e) in the bezier implementation that changed our intended colormaps in an undesirable way.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/)-licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a nonprofit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/compliance-users/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
