<div align="center">

# Bootstrap

<img src="https://img.shields.io/github/license/benjymoses/bootstrap"/>
<img src="https://img.shields.io/github/actions/workflow/status/benjymoses/bootstrap/release.yml" />
<img src="https://img.shields.io/github/commit-activity/m/benjymoses/bootstrap" />

</div>
</br>

### Bootstrap your TypeScript project in an opinionated way

When you're a less experienced developer, picking through package managers, sensible defaults, and helpful developer packages can be hard. This tool bootstraps an empty folder with everything you need to get started writing code - quickly.

The initial release features my opinionated defaults that I enjoy, but future iterations will allow for customisation and overrides.

Simply run Bootstrap, select your language and project choices, answer any prompts that are needed and your project will be quickly created and ready for you to get started writing code.

> [!CAUTION]
> At this stage, this tool has not been designed or tested to run in existing repositories. It it intended to be used in a completely empty folder.

## Getting started

There are 2 options for how to use this tool. To quickly run it, you can directly execute the package, or you can install the package globally for frequent convenient use.

### Just run it

> [!NOTE]
> If you're using PNPM use `pnpx`.

```bash
   npx @benjymoses/bootstrap
```

### Install globally and run locally

```bash
npm install -g @benjymoses/bootstrap
```

or if using PNPM

```bash
pnpm add -g @benjymoses/bootstrap
```

At your terminal run `bootstrap`

## Features

When running Bootstrap, you'll be asked a minimal set of prompted questions based on your selections. These are used to populate relevant generated files.

:package: Basic project configuration

- **package.json**: my defaults for ES Modules, and installs [PNPM](https://pnpm.io/) if it's not already installed
- **tsconfig.json**: my default preferences including es2023 and DOM in the 'lib'
- **.gitignore**: my defaults for MacOS filesystem, node projects, test coverage, and build folders
- **scripts**: creates common scripts within package.json with defaults for added options
- **src/index.ts**: provides a sample TypeScript file to quickly validate execution and testing frameworks

:truck: Additional packages

- **[Commitizen](https://commitizen-tools.github.io/commitizen/)**: for conventional commits with Gitmoji support
- **[Husky](https://typicode.github.io/husky/)**: with default Git hooks to enforce conventional commits from Commitizen
- **[TSX](https://tsx.is/)**: for directly executing TypeScript without a manual transpilation to JavaScript
- **[ESBuild](https://esbuild.github.io/)**: for bundling and minification of distribution assets

:test_tube: Testing frameworks

- **[Vitest](https://vitest.dev/)**: fast testing framework compatible with Jest

:card_file_box: Local Git repository

- **initial commit**: repository starts with a main branch and once Bootstrap has finished installing your packages will perform an initial commit so you're ready to get started

## Principles

The simple principles that guide the roadmap for this project are:

1. **It's for me first**: start with features and defaults that I will personally get value from first to get to v1.0
2. **Adopt community ideas and trends**: if the world changes or new good practices emerge, support them
3. **Optionality is important**: look for opportunities to introduce optionality and flexiblity for users
4. **Defaults should be overriden**: if you know better and have preferences, you should be able to express these

## Acknowledgments

The wrapper for the CLI is built using [Plop](https://plopjs.com/).

## Contributing

After v1.0 this project will be open to contributions in the form of pull requests, and will have Issues templates for feature requests and bug reports.

<!-- // TODO: links to PR and feature-request issue -->
