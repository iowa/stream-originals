# Technology Stack

## Build System & Package Management

- **Monorepo**: Turborepo for task orchestration and caching
- **Package Manager**: pnpm with workspaces
- **Node.js**: >=18 (API), >=22 (Web)
- **TypeScript**: Primary language across all packages

## Frontend (Web App)

- **Framework**: SolidJS with SolidStart for SSR
- **Styling**: TailwindCSS v4 with DaisyUI components
- **Build Tool**: Vinxi
- **Icons**: Lucide Solid
- **Images**: @unpic/solid for optimized image handling

## Backend (API)

- **Framework**: Hono with Node.js server
- **API Documentation**: OpenAPI with Scalar API reference
- **Validation**: Hono standard validator with Zod
- **Web Scraping**: Crawlee and Cheerio
- **HTTP Client**: Axios

## Database & ORM

- **Database**: PostgreSQL (Docker: postgres:17-alpine3.22)
- **ORM**: Drizzle ORM with Drizzle Kit
- **Local Development**: PGlite for testing
- **Migrations**: Drizzle Kit migration system

## Testing & Quality

- **Testing**: Vitest across all packages
- **Code Formatting**: Prettier
- **Type Checking**: TypeScript strict mode

## Common Commands

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm build            # Build all packages and apps
pnpm lint             # Run linting across workspace
pnpm check-types      # Type check all packages
pnpm format           # Format code with Prettier

# Database (from packages/common)
pnpm db:generate      # Generate Drizzle migrations
pnpm db:migrate       # Run database migrations

# Dependencies
pnpm upgrade-dependencies  # Update all dependencies

# Docker
docker-compose up     # Start PostgreSQL database (port 5433)
```

## Environment Setup

- Database runs on port 5433 (not default 5432)
- Requires POSTGRES_URL environment variable for database connection
- Docker network: stream-originals-network