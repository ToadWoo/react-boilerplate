# REACT-BOILERPLATE

This is a react starter which use `TypeScript` | `Webpack5` | `ESLint` | `Prettier` | `Sass`

### autoformat in VSCODE

1. add plugin `ESLINT`、`Prettier` in VSCODE
2. you can change your vscode settings like this:

```json
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ],
    "editor.formatOnSave": true,
    "[javascript]":  {
        "editor.formatOnSave":  false,
    },
    "[javascriptreact]":  {
        "editor.formatOnSave":  false,
    },
    "[typescript]":  {
        "editor.formatOnSave":  false,
    },
    "[typescriptreact]":  {
        "editor.formatOnSave":  false,
    },
```

### TODO

- [ ] add new branch (use babel-loader to compailer TypeScript)
