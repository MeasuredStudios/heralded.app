# ⚛️ Heralded App

An ease to use platform for informing groups.

## Inspiration

I'm not a designer, I depend on others generous work. Just like the work from [Narative](https://www.narative.co/).

One of their projects drives the initial design of the this project: https://www.narative.co/labs/novela/

### Table of Contents

- [Why Novela?](#why-use-novela)

- [Getting Started](#getting-started-with-gatsby-starter-novela)

  - With Gatsby Starter Novela

    - [Installation](#step-1-starter-installation)
    - [Develop & Build](#step-2-develop--build)

  - From scratch

    - [Installation](#step-1-installation)
    - [Folder structure](#step-2-folder-structure)
    - [Using Novela Theme](#step-3-using-narativegatsby-theme-novela)
    - [Adding an Author](#step-4-adding-an-author)
    - [Adding a Post](#step-5-adding-a-post)
    - [Configuring Site Metadata](#step-6-configuring-sitemetadata)

- [Data Sources](#data-sources)

  - [Local](#local)
  - [Google Sheets](#contentful)

- [Customization](#customization)

  - [Enabling Author Pages](#enabling-author-pages)
  - [Changing styles](#changing-styles)
  - [Component shadowing](#component-shadowing)
  - [Using images](#using-images)
  - [Adding your logo](#adding-your-logo)
  - [Adding Mailchimp](#adding-mailchimp)

- [Data Models](#data-models)

  - [Theme Options](#theme-options)
  - [Author](#author)
  - [Post](#post)
  - [Site Metadata](#site-metadata)

- [Future](#the-future)

  <br />

## 🚀 Getting started

- Clone this project and install all the required dependencies _(e.g. with `npx gatsby new gatsby-example-site https://github.com/kripod/gatsby-starter-strict`)_
- Start a development server with `yarn develop` or `npm run develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting), [`type-check`](#static-type-checking) and [`lint`](#linting) are also available_

### Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kripod/gatsby-starter-strict)

## ✨ Developer experience

### Automatic code formatting

[Prettier][] aims to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting it is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Static type checking

[TypeScript][] adds optional types to JavaScript, preventing several programming mistakes. For a quick guide about using React with it, please refer to the [React TypeScript Cheatsheet][].

[typescript]: https://www.typescriptlang.org/
[react typescript cheatsheet]: https://github.com/sw-yx/react-typescript-cheatsheet

### Linting

Source code is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an override set of rules provided by [eslint-config-airbnb][].

[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
