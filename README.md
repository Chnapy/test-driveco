# Driveco test - Charge-boxes listing

This app aims to list given charge-boxes with location & details.

**Checkout detailed specs in [specifications doc](./docs/specifications.md).**

Focus is made on frontend-related code, development environment & tooling.

Repository is made in monorepo with frontend, backend and shared packages.
Mocked backend can be found in backend package.

## Install requirements

### Node version

`nvm` is used to get the correct node version.

```
nvm install
nvm use
```

### pnpm as package manager

You should use pnpm only.
Checkout https://pnpm.io/installation

### Dependencies

```
pnpm install
```

## Dev

```
# first build shared package
pnpm -F=./shared build

# run all dev once
pnpm dev

# or a single package only
pnpm -F=./frontend dev
```

> Frontend package depends on backend to work.

> Shared package should be built before any dev

## Build

```
# run all build once
pnpm build

# or a single package only
pnpm -F=./frontend build
```

You can also preview your build.

```
# frontend only
pnpm -F=./frontend preview
```

## Checks

Each "check" command begins with `c:`:

- `pnpm c:type` - Check Typescript typing;
- `pnpm c:lint` - Check linter with ESLint, with auto-fix variant `c:lint:fix`
- `pnpm c:format` - Check format using Prettier, with auto-fix variant `c:format:fix`
- `pnpm c:spell` - Check spelling using CSpell;
- `pnpm c:test` - Check tests using Jest;

## What remains to do

Because of time concerns no big efforts were done on some parts.

### Tests

Some test examples were done using dependency injections (hooks & component).
Checkout files:

- `frontend/src/components/charge-box-card/hooks/use-charge-box-distance.test.ts`
- `frontend/src/components/charge-box-card/hooks/use-charge-box-gmaps-href.test.ts`
- `frontend/src/components/charge-box-card/items/charge-box-map-button.test.tsx`

More tests can be done, following these examples.
Also storybook can be used more deeply to enforce testing.

### Docker & environments

A lot remains to do here:

- use of devcontainers (https://containers.dev/) instead of `nvm`;
- use of Docker images for each environments (dev, stage, production for example);
- use of the same images in CI/CD process;

You can still see an example in one of my personal project: https://github.com/Chnapy/bloup

### Data mocking

Frontend should be testable without any backend, mocking its data using for example `msw`.

### Renaming

"frontend/backend/shared" are too generic & should be renamed, for example "web/api-chargebox/api-chargebox-sdk".
