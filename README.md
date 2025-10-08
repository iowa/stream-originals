## DOCKER - DATABASE

```bash
docker compose up --build --detach &
```

### Stop

```bash
docker compose down -v --rmi local
```


## DOCKER - API

BUILD
```bash
docker build -f apps/api/Dockerfile -t stream-originals-api .
```

START
```bash
docker rm -f stream-originals-api || true && docker run --name stream-originals-api -p 8080:8080 stream-originals-api
```

### Google Cloud SDK Shell

LOGIN
```bash
gcloud auth login
```

```bash
docker tag stream-originals-api gcr.io/stream-originals/stream-originals-api
```

PUSH
```bash
docker push gcr.io/stream-originals/stream-originals-api
```