# Project Structure

## Workspace Organization

This is a pnpm monorepo with Turborepo orchestration following a standard apps/packages structure.

```
stream-originals/
├── apps/                    # Applications
│   ├── api/                 # Hono REST API server
│   │   ├── src/            # API source code
│   │   ├── config/         # OpenAPI generator configs
│   │   └── Dockerfile      # API container
│   └── web/                # SolidJS frontend
│       ├── src/            # Web app source code
│       ├── public/         # Static assets
│       └── Dockerfile      # Web container
├── packages/               # Shared packages
│   └── common/             # Shared utilities and database
│       ├── src/            # Common source code
│       └── drizzle/        # Database migrations
└── docker-compose.yaml    # PostgreSQL database
```

## Package Dependencies

- **@repo/common**: Shared package used by both API and Web apps
- **Workspace references**: Use `workspace:*` for internal dependencies
- **Database schema**: Centralized in packages/common

## File Conventions

- **TypeScript**: All packages use ES modules (`"type": "module"`)
- **Config files**: Each app has its own tsconfig.json and vitest.config.ts
- **Build outputs**: 
  - API: `dist/` directory
  - Web: `.vinxi/` directory
  - Common: `dist/` directory

## Development Workflow

1. **Database first**: Start PostgreSQL with `docker-compose up`
2. **Install dependencies**: `pnpm install` at root
3. **Build common**: Packages build in dependency order via Turborepo
4. **Development**: `pnpm dev` starts all apps concurrently

## Key Patterns

- **Shared database logic**: All database schemas and utilities in packages/common
- **API-first**: OpenAPI spec generation for API documentation
- **Type safety**: Zod schemas shared between frontend and backend
- **Containerization**: Each app has its own Dockerfile for deployment