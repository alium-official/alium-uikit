# Alium UIkit

[![Version](https://img.shields.io/npm/v/@aliumswap/uikit)](https://www.npmjs.com/package/@aliumswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@aliumswap/uikit)](https://www.npmjs.com/package/@aliumswap/uikit)

Alium UIkit is a set of React components and hooks used to build pages on Alium's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @aliumswap/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@aliumswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@aliumswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://aliumswap.github.io/alium-uikit/)
