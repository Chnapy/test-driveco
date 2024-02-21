# Driveco test - Charge-boxes listing

This app aims to list given charge-boxes with location & details.

**Checkout detailed specs in [specifications doc](./docs/specifications.md).**

Focus is made on frontend-related code, development environment & tooling.

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
pnpm dev
```

## Build

```
pnpm build
```

You can also preview your build.

```
pnpm preview
```

## Checks

Each "check" command begins with `c:`:

- `pnpm c:type` - Check Typescript typing;
- `pnpm c:lint` - Check linter with ESLint, with auto-fix variant `c:lint:fix`
- `pnpm c:format` - Check format using Prettier, with auto-fix variant `c:format:fix`
- `pnpm c:spell` - Check spelling using CSpell;
- `pnpm c:test` - Check tests using Jest;
