
# TapTapOn.me Webadmin


- install dependencies: `yarn`
- create `./.env` file, same data with `./.env.dev` file
- after that: `yarn start`
### S.O.S

in file: `src\appConfig\paths.ts`
- In localhost: change `deployDomain` to `/`
- When merge to branch `master` (deployment), pls make sure `deployDomain = 'webadmin.taptapon.me-v2'` 

### Commit

#### <a name="commit-header"></a>Commit Message Format

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

#### <a name="commit-header"></a>Commit Message Example
- `feat(similarityReports): get similarity reports and display in a grid`
- `update(similarityReports): add updatedDate col in the report grid`
- `fix(similarityReports): display correct message error`
- `update(global): change css system`

### Deployment
- Manual:

```
  npm run deploy
```

- CI:
  - push commit to branch `master`