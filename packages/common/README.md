## DOCKER - DATABASE

### Start

```bash
docker compose up --build --detach &
```

### Stop

```bash
docker compose down -v --rmi local
```

### Generate
```bash
pnpm run db:generate
```

### Migrate
```bash
pnpm run db:migrate
```