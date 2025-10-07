### DOCKER - DATABASE

```bash
docker compose up --build --detach &
```

### Stop

```bash
docker compose down -v --rmi local
```


### API

BUILD
```bash
docker build -t iowa/stream-originals-api:latest .
```

START
```bash
docker rm -f stream-originals-api || true && docker run --name stream-originals-api -p 3000:3000 iowa/stream-originals-api
```

PUSH
```bash
docker push iowa/stream-originals-api:latest
```