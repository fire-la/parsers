# @firela/parsers

Community-driven financial institution statement parsers for Beancount.

## Overview

This monorepo contains parsers for various financial institution statement formats. Each parser is published as a separate npm package under the `@firela/parser-*` scope.

## Packages

| Package | Description |
|---------|-------------|
| [@firela/parser-core](./packages/parser-core) | Core interfaces and utilities for building parsers |
| [@firela/parser-template](./packages/parser-template) | Template parser for AI-generated parsers |

## Development

### Prerequisites

- Node.js 20.x LTS
- pnpm 9.x

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Lint code
pnpm run lint
```

### Creating a New Parser

1. Use `@firela/parser-template` as reference
2. Create a new package in `packages/parser-[institution]/`
3. Implement the `Parser` interface from `@firela/parser-core`
4. Add tests for your parser
5. Submit a PR

## Architecture

```
fire-la/parsers/
├── packages/
│   ├── parser-core/              # Core interfaces and utilities
│   ├── parser-template/          # Template for new parsers
│   └── parser-[institution]/     # Community-contributed parsers
├── package.json                  # Monorepo root config
├── pnpm-workspace.yaml          # Workspace definition
└── tsconfig.base.json           # Shared TypeScript config
```

## Related Projects

- [IGN Beancount SaaS](https://github.com/fire-la/ign) - Main application using these parsers

## License

MIT
