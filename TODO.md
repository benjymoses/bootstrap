# Scope

## MVP

- [x] Basics

  - [x] ask questions on _projectName_, _projectDescription_, _outDir_
  - [x] copy and customise package.json - get _authorName_ from git config
  - [x] copy and customise tsconfig.json - use _outDir_
  - [x] copy and custmise gitignore - use _outDir_

- [x] Always last

  - [x] init git and perform initial commit
  - [x] add Husky for git hooks to ensure conventional commits
  - [x] fix up husky to mirror vitest so it can copy config but also run npm commands

- [x] Testing

  - [x] Need a better dev cycle that doesn't generate within this project (now I'm running git commands)

  - [x] add scripts (test-> "vitest run" and test:watch-> "vitest")
  - [x] add a default test that validates the test runner is working

## Next

- [x] tsx
- [x] esbuild
- [x] husky (with scripts and hooks)
- [ ] refactor prompts and generators to both be modular
- [ ] opinionated starting scripts for linting (eslint)
- [ ] Tests for the Bootstrap project itself
- [ ] enable selective units
- [ ] prettier
  - [ ] prettierignore
  - [ ] any prefs I want to lift in
- [ ] automated reset of git remote (requires a change in starting point before language selection)

## Future

- [ ] git workflows, contributing, pr templates etc (+ npm publishing workflow)
- [ ] test framework alternative like Jest optimised for TS
- [ ] turbo / monorepo bits
- [ ] think about patching files / modifying for existing projects

