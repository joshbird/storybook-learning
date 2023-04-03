# Smash Delta Vite Starter

This is a vite starter template with the following pieces:

- `react-swc-ts` template preset
- Tailwind CSS & Daisy UI
- Prettier
- ESLint
- Husky
- Path Alias

## Tailwind & Daisy

Tailwind has been installed with the default configuration. The typography and form plugin have also been added. Daisy UI has been added for quick prototyping but feel free to remove.

## Prettier

Config added under `prettier.config.cjs`. Recommend adding format on save via VS Code. Formatting can also be ran with `yarn run format`

## ESLint

ESLint has been added. Note, we are using the [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new#configuring-language-options) setup, which at the moment is still experimental.

Within ESLint we have added:

- Config under `eslint.config.js`
- ESLint recommended rules for all `.js`,`.ts`,`.jsx` and `.tsx` files
- React & react-hook plugins and recommended rules for `.jsx` and `.tsx` files
- ypescript plugin and parser. Typescript recommended rules added
- Prettier config. Remove formatting rules that prettier handles

To show eslint warnings in VSCode during development, add the ESLint Plugin, and enable the experimental option Use Flat Config

## Husky

Husky has been added and enforces two rules: successful lint on commit, and successful build on push.

## Path Alias

A path alias mapping `~/*` to `src/*` has been added. This is defined in `tsconfig.json` and uses the `vite-tsconfig-paths` plugin in `vite.config.ts` to follow that defintion.

## SD Logo & Icons

The smash delta logo is included in the repo. This is as a component, but also as a series of images under `public/icons` to be used in `index.html` and / or in `manifest.json`.

## To Do

- Add documentation for adding common stuff like storybook, testing, PWA(?)
- Add documentation for adding other core pieces (?) docs may not go here
