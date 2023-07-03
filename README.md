# collabland-tokengate-react-context

## React Context Provider for Collab.Land's TokenGate

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

This repo is the example of the article ["How to create and publish React Typescript npm package with demo and automated build"](https://medium.com/@igaponov/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca).

You can clone it and step by step create your own NPM package and publish it.

It is simple React counter.

[**Live Demo**](https://gapon2401.github.io/collabland-tokengate-react-context/)

## Installation:

```bash
npm install collabland-tokengate-react-context --save-dev
```

or

```bash
yarn add -D collabland-tokengate-react-context
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'collabland-tokengate-react-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/collabland-tokengate-react-context
[npm-image]: https://img.shields.io/npm/v/collabland-tokengate-react-context
[github-license]: https://img.shields.io/github/license/parv3213/collabland-tokengate-react-context
[github-license-url]: https://github.com/parv3213/collabland-tokengate-react-context/blob/master/LICENSE
[github-build]: https://github.com/parv3213/collabland-tokengate-react-context/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/parv3213/collabland-tokengate-react-context/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/collabland-tokengate-react-context