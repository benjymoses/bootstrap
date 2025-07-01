# Bootstrap Changelog

## [0.3.16](https://github.com/benjymoses/bootstrap/compare/v0.3.15...v0.3.16) (2025-07-01)

### :bug: Bug Fixes

* changed mechanism for package management (re [#41](https://github.com/benjymoses/bootstrap/issues/41)) ([ad9d099](https://github.com/benjymoses/bootstrap/commit/ad9d099f97f9b0fbf71ba75ca57cf2c3540f1245))

## [0.3.15](https://github.com/benjymoses/bootstrap/compare/v0.3.14...v0.3.15) (2025-07-01)

### :bug: Bug Fixes

* **linting:** added settings.json for vscode (re [#43](https://github.com/benjymoses/bootstrap/issues/43)) ([7404e13](https://github.com/benjymoses/bootstrap/commit/7404e137565272d39903f077faa7e61f665ad40c))

## [0.3.14](https://github.com/benjymoses/bootstrap/compare/v0.3.13...v0.3.14) (2025-07-01)

### :bug: Bug Fixes

* **pnpm:** added pre-build permissions for eslint to package.json (re [#44](https://github.com/benjymoses/bootstrap/issues/44)) ([343b27c](https://github.com/benjymoses/bootstrap/commit/343b27c2c2ffde9e4d7c8c73b74c743a78606c28))

## [0.3.13](https://github.com/benjymoses/bootstrap/compare/v0.3.12...v0.3.13) (2025-06-29)

### :sparkles: Features

* added Biome generator (re [#38](https://github.com/benjymoses/bootstrap/issues/38)) ([666ea27](https://github.com/benjymoses/bootstrap/commit/666ea27b08f3c1e7936dcf10157e522365df051f))

## [0.3.12](https://github.com/benjymoses/bootstrap/compare/v0.3.11...v0.3.12) (2025-06-29)

### :bug: Bug Fixes

* **ci:** lint CI settings updated ([20069d5](https://github.com/benjymoses/bootstrap/commit/20069d5529a1b0eae59435611d1a44d6725f483f))
* **lint:** repeated re-lint and format of project after config fix ([2e8aca3](https://github.com/benjymoses/bootstrap/commit/2e8aca31170238995cbe80c172b8045aa759cd06))
* **packaage:** version sync ([e125795](https://github.com/benjymoses/bootstrap/commit/e12579545a1366d6d538dde44580ad80d4d15818))

## [0.3.11](https://github.com/benjymoses/bootstrap/compare/v0.3.10...v0.3.11) (2025-06-29)

### :sparkles: Features

* **lint:** added husky and lint-staged hooks for biome to base project ([ab71b12](https://github.com/benjymoses/bootstrap/commit/ab71b1252d974bc6e815a40e012f7d57452a0237))

## [0.3.10](https://github.com/benjymoses/bootstrap/compare/v0.3.9...v0.3.10) (2025-06-29)

### :sparkles: Features

* **lint:** added biome to replace estlint and prettier (re [#37](https://github.com/benjymoses/bootstrap/issues/37)) ([f5b5e05](https://github.com/benjymoses/bootstrap/commit/f5b5e05bc6041addd1052e61a4be500b63b281ff))

### :bug: Bug Fixes

* **lint:** added vscode settings to attempt disabling prettier and eslint (re [#37](https://github.com/benjymoses/bootstrap/issues/37)) ([ef50af2](https://github.com/benjymoses/bootstrap/commit/ef50af258cfb64cce08cb735c103869030f21f9a))

### :wrench: Chores

* **lint:** converted biome.json to .jsonc, added more explicit .vscode/settings.json (re [#37](https://github.com/benjymoses/bootstrap/issues/37)) ([e27c0a9](https://github.com/benjymoses/bootstrap/commit/e27c0a905c8c7b79470fa72bd5f282436caccbae))

## [0.3.9](https://github.com/benjymoses/bootstrap/compare/v0.3.8...v0.3.9) (2025-06-28)

### :memo: Documentation

* **readme:** written initial version of README.md (re [#34](https://github.com/benjymoses/bootstrap/issues/34)) ([8da8b66](https://github.com/benjymoses/bootstrap/commit/8da8b6693c6c3ecd2242e7a24cf4de4802056389))
* **todo:** moved todos to github issues and project ([35ed3c3](https://github.com/benjymoses/bootstrap/commit/35ed3c30f9fc75c68060c9774cd3e2a1fd9ba283))

## [0.3.8](https://github.com/benjymoses/bootstrap/compare/v0.3.7...v0.3.8) (2025-06-27)

### :bug: Bug Fixes

* **ci:** fixing up github releases ([c8264e3](https://github.com/benjymoses/bootstrap/commit/c8264e3a91e375d701d1578f76c6b06d61cbc37e))

## [0.3.7](https://github.com/benjymoses/bootstrap/compare/v0.3.6...v0.3.7) (2025-06-27)

### :bug: Bug Fixes

- **ci:** more regex testing ([334bd16](https://github.com/benjymoses/bootstrap/commit/334bd169dbcf9237dd99303aa5f8e17a8e4f68ec))
- **ci:** more testing with regex ([8e4c4cd](https://github.com/benjymoses/bootstrap/commit/8e4c4cd33195274774018aebec40a0164c3962d0))

## [0.3.2](https://github.com/benjymoses/bootstrap/compare/v0.3.1...v0.3.2) (2025-06-27)

### :sparkles: Features

- Fixed-up github actions ready for release by **Ben Moses** [<samp>(f5848)</samp>](https://github.com/benjymoses/bootstrap/commit/f584898)

### :bug: Bug Fixes

- **actions**:
  - Fixed bad command in actions for pnpm install by **Ben Moses** [<samp>(a13de)</samp>](https://github.com/benjymoses/bootstrap/commit/a13de39)
- **ci**:
  - Troubleshooting CI by **Ben Moses** [<samp>(81a31)</samp>](https://github.com/benjymoses/bootstrap/commit/81a3172)
  - Troubleshooting CI again by **Ben Moses** [<samp>(1e86b)</samp>](https://github.com/benjymoses/bootstrap/commit/1e86bcf)
  - Troubleshooting CI still by **Ben Moses** [<samp>(46d07)</samp>](https://github.com/benjymoses/bootstrap/commit/46d0734)
  - Removed tag from npm release-it settings by **Ben Moses** [<samp>(6efc9)</samp>](https://github.com/benjymoses/bootstrap/commit/6efc902)
  - Added NODE_AUTH_TOKEN to actions by **Ben Moses** [<samp>(6ceb4)</samp>](https://github.com/benjymoses/bootstrap/commit/6ceb427)

## [0.3.1](https://github.com/benjymoses/bootstrap/compare/v0.3.0...v0.3.1) (2025-06-27)

### :sparkles: Features

- Replaced changelog generator with release-it by **Ben Moses** [<samp>(9f71d)</samp>](https://github.com/benjymoses/bootstrap/commit/9f71d2a)

## [0.3.0](https://github.com/benjymoses/bootstrap/compare/v0.2.0...0.3.0)

### :sparkles: Features

- Created baseline of generators by **Ben Moses** [<samp>(672ccbd)</samp>](https://github.com/benjymoses/bootstrap/commit/672ccbd2a)
