# bootstrap

Bootstraps projects with common settings I like

## TODO

- [ ] package.json
- [ ] set up git with default .gitignore
- [ ] set up eslint
- [ ] set up prettier
- [ ] set up TypeScript jest
- [ ] init git and do first commit with cz

## Learning

**Actions**: return an array like:

```typescript
return [
  {
    type: "someType",
  },
];
```

**ActionTypes**: return a `plop.setActionType` which establishes the type, including the actual code to run. This then gets triggered when an action of the equal type is used "specified in the `Action` within the actions:[] part of a `setGenerator()` call.

**Generators**: are prompts with an array of actions
