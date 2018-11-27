---
permalink: /blog/gatsby-eslint-vscode-import-alias
title: How to set up import aliases for Gatsby.js
description: A step-by-step guide to use import aliases with Webpack, ESlint, and VS Code
date: 2018-11-23T00:00:00.000Z
ogImage: "../multimedia/og.png"
---

Don't you just hate when you have to import a component from deep within your import tree?

```js
import Component from "../../../../components/Component";
```

All I want is to be able to directly import from my project's local directory's alias from anywhere:

```js
import Component from "~components/Component";
```

On top of the Gatsby understanding this, I want to keep all the benefits of my current setup—ESlint's `import` linting and VS Code's `import` autocomplete.

## Import alias naming

Let's begin by figuring out what we want to call our alias. I've considered several different options:

```js
import Component from "components/Component";
```

You see this one quite often in people's setups. While technically not an alias, my biggest issue with this naming is that it reads as if `components` were a library from NPM—which it's not. Nope.

```js
import Component from "@components/Component";
```

This is the direction many libraries are going (think `@babel`, `@types`, etc.), however, it carries the same issue as above—`components` is not an NPM library. Nope.

```js
import Component from "~/components/Component";
```

Now were getting somewhere, `~` is generally understood to signify local things. Yet, `~/` would read as if I'm importing from the root of the machine, not the root of the project. Nope.

```js
import Component from "~components/Component";
```

This is my sweet spot. Similar to `@` meaning [a scoped package](https://docs.npmjs.com/misc/scope), a `~` tells me it's a local folder within the project. Yup.

## Gatsby import alias

Gatsby uses Webpack. Aliases in Webpack can be set up through a [resolve alias](https://webpack.js.org/configuration/resolve/#resolve-alias). Gatsby doesn't expose its Webpack config for us to change. Dang it.

At the same time, Gatsby _does_ expose an `onCreateWebpackConfig` hook. Yessir. Let's add this to `gatsby-node.js`:

```js
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components")
      }
    }
  });
};
```

`actions.setWebpackConfig` _merges_ (shouldn't it be called mergeWebpackConfig?) whatever we define in its argument [into Gatsby's Webpack config](https://www.gatsbyjs.org/docs/add-custom-webpack-config/) whenever it's run. Easy and done.

## ESlint import plugin

While Gatsby is now happy, a few things broke. ESlint's import plugin is [screaming left-and-right](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md) that it cannot resolve these paths (even though everything works):

```js
// [eslint] Unable to resolve path to module '~components/Component'. [import/no-unresolved]
import Component from "~components/Component";
```

We need to tell ESlint to resolve these paths, just like we told Gatsby. And we're going to need a [little library](https://github.com/johvin/eslint-import-resolver-alias) for that. Let's run:

```sh
yarn add -D eslint-import-resolver-alias
```

And then add the following to our `.eslintrc` ([or any other way you control your ESlint](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)):

```json
{
  [...]
  "settings": {
    "import/resolver": {
      "alias": [
        ["~components", "./src/components"]
      ]
    }
  }
}
```

The `alias` field [defines an array](https://github.com/johvin/eslint-import-resolver-alias#usage) in which each item defines one alias—the first item is the name, the second is the path to resolve it to. Smooth and done.

## VS Code import autocomplete

Lastly, VS Code [stopped suggesting subfolders](https://code.visualstudio.com/docs/editor/intellisense) when typing the alises. Unsurprisingly, VS Code needs to be told about the aliases too.

Let's add the following to our `jsconfig.json` (or create [this file](https://code.visualstudio.com/docs/languages/jsconfig) at the root of your project):

```json
{
  [...]
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~components/*": ["src/components/*"]
    }
  }
}
```

Same thing as above, this time with [glob patterns](<https://en.wikipedia.org/wiki/Glob_(programming)>)—key being the name, value being an array of routes to resolve. All done.

## All done

That's it. Generally, I'd prefer to keep the information about my aliases in one place—single source of truth etc. Then again, it's understandable as the tools we need to orchestrate work completely independently.

You're going to save _a lot_ of typing with this. [Let me know on Twitter](https://twitter.com/mrozilla) what you think!
