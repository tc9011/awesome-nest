// type: type of commit
// feat:  A new feature
// fix: A bug fix
// docs: Documentation only changes
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// refactor: A code change that neither fixes a bug nor adds a feature
// perf: A code change that improves performance
// test: Adding missing tests or correcting existing tests
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// revert:   Reverts a previous commit
// chore: Other changes that don't modify src or test files
// subject: description of commit,  50/72 formatting

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ["feat", "fix", "docs", "style", "refactor", "chore", "publish", "perf", "revert", "test", "build", "ci"]
    ],
    'subject-case': [0, 'never'],
  },
};
