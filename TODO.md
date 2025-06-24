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
  - [ ] fix up husky to mirror vitest so it can copy config but also run npm commands

- [ ] Testing

  - [x] Need a better dev cycle that doesn't generate within this project (now I'm running git commands)

  - [ ] hint that Vitest is the only default option
  - [x] add scripts (test-> "vitest run" and test:watch-> "vitest")
  - [ ] add a default test that validates the test runner is working

## Next

- [ ] Tests for the Bootstrap project itself
- [ ] opinionated starting scripts using nodemon or similar for dev / lint / prepare

## Future

- [ ] eslint
- [ ] prettier
- [ ] git workflows, contributing, pr templates etc (+ npm publishing workflow)
- [ ] test framework selection
- [ ] turbo / monorepo bits
- [ ] automated reset of git remote

## Questions

- ESBuild as standard?

---

# References

## Husky

"husky": "^9.1.7",

"husky": {
"hooks": {
"prepare-commit-msg": "exec < /dev/tty && npx cz --hook || true"
}
}

"prepare": "husky"

## Turbo Repo

"scripts": {
"build": "turbo run build",
"dev": "turbo run dev",
"lint": "turbo run lint",
"test": "turbo run test",
"test:watch": "turbo run test:watch",
}

and turbo.json in root

workspaces requires:

"private": true,
"packageManager": "npm@11.4.1", // <<--- needs setting dynamically

"workspaces": [
"apps/*",
"packages/*"
],

consider constructing package.jsons for turbo packages on the fly
