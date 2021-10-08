<div width="100%" align="center">
  <h1>
    <b>Mikey Pro</b>
  </h1>
  <h3>
    <a href="https://github.com/mikey-pro/style-guide">Style Guide</a>
    +
    <a href="https://github.com/mikey-pro/theme">Theme</a>
  </h3>
  <a href="https://github.com/mikey-pro">
    <img src="img/mikey-pro-logo.svg" style="height: 75px" alt="Mikey Pro Logo" />
  </a>
  <br />
</div>

## **@mikey-pro/style-guide**

### Lint and Format Code (the way Mikey likes it)

_A compilation of packages, plugins, style guides, custom configurations and
rules for maintaining bougie code_

<table>
  <thead>
    <tr>
      <th align="left">Compatibility</a></th>
      <th align="left">Rules</a></th>
      <th align="left">Configs</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        JavaScript <br />
        React <br />
        Vue <br />
        JSX <br />
        HTML <br />
        CSS <br />
        SCSS <br />
        JSON <br />
        Markdown <br />
      </td>
      <td valign="top">
        AirBnB <br />
        ESLint <br />
        Prettier <br />
        Sonar <br />
        Compat <br />
        Remark <br />
        Stylelint <br />
        @HTML
      </td>
      <td valign="top">
        <a href="https://github.com/mikey-pro/eslint-config">ESLint</a><br />
        <a href="https://github.com/mikey-pro/prettier-config">Prettier</a><br />
        <a href="https://github.com/mikey-pro/stylelint-config">Stylelint</a>
      </td>
    </tr>
  </tbody>
</table>

## Requirements

<a href="https://code.visualstudio.com/">VSCode</a> with these extensions:
<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a> |
<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a> |
<a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">Stylelint</a>

Add <a href="https://github.com/mikey-pro/style-guide/blob/main/vscode-settings.json">these preferences</a> to `settings.json`

## Usage

### Install

```shell
npm i -D @mikey-pro/style-guide
```

### Configure

Add bundled configs to `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@mikey-pro/eslint-config"
  },
  "prettier": "@mikey-pro/prettier-config",
  "stylelint": {
    "extends": "@mikey-pro/stylelint-config"
  }
}
```

## Compatibility

### React

Install an [additional ESLint configuration](https://github.com/mikey-pro/eslint-config-react) which includes React rules:

```shell
npm i -D @mikey-pro/eslint-config-react

yarn add -D @mikey-pro/eslint-config-react
```

Update `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@mikey-pro/eslint-config-react"
  }
}
```

### Preact

Install an [additional ESLint configuration](https://github.com/mikey-pro/eslint-config-preact) which includes Preact rules:

```shell
npm i -D @mikey-pro/eslint-config-preact

yarn add -D @mikey-pro/eslint-config-preact
```

Update `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@mikey-pro/eslint-config-preact"
  }
}
```

### Vue

Install an [additional ESLint configuration](https://github.com/mikey-pro/eslint-config-vue) which includes Vue rules:

```shell
npm i -D @mikey-pro/eslint-config-vue

yarn add -D @mikey-pro/eslint-config-vue
```

Update `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@mikey-pro/eslint-config-vue"
  }
}
```

It is recommended to also [use Vetur](https://github.com/vuejs/vetur) with your
Vue project to provide syntax highlighting and additional features in VSCode

[Install Vetur for VSCode](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

Add `vetur.config.js` to the root directory with the correct paths:

```js
module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './',
      package: './package.json',
      globalComponents: ['./client/src/components/**/*.vue'],
      tsconfig: './client/jsconfig.json',
    },
  ],
};
```

Add `jsconfig.json` with a glob pattern that includes all of your `.vue` files:

```json
{
  "include": [
    "./src/**/*"
  ]
}
```
