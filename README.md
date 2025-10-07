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
docker build -t stream-originals-api .
```

START
```bash
docker rm -f stream-originals-api || true && docker run --name stream-originals-api -p 3000:3000 stream-originals-api
```

```bash
docker tag stream-originals-api gcr.io/stream-originals-api/stream-originals-api
```


```bash
docker push gcr.io/stream-originals-api/stream-originals-api
```