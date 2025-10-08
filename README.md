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
docker build -f apps/api/Dockerfile -t stream-originals-api --no-cache --platform=linux/amd64 . 
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

After deploying Cloud Run
add Cloud SQL connections

with
POSTGRES_URL=postgres://myuser:mypassword@/mydatabase?host=/cloudsql/my-project:us-central1:my-instance
eg: postgres://postgres:password@/postgres?host=/cloudsql/stream-originals:us-central1:stream-originals-postgres

localy to connect to remote database
POSTGRES_URL="postgres://postgres:password@104.197.84.134:5432"