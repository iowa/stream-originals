## DOCKER - WEB

### Build the API Docker Image

```bash
docker build -f apps/api/Dockerfile -t stream-originals-web --no-cache --platform=linux/amd64 .
```

### Run the API Container

```bash
docker rm -f stream-originals-web || true && docker run --name stream-originals-api -p 8080:8080 stream-originals-web
```

---

## GOOGLE CLOUD DEPLOYMENT

### Authenticate with Google Cloud

```bash
gcloud auth login
```

### Tag and Push Docker Image

```bash
docker tag stream-originals-web gcr.io/stream-originals/stream-originals-web
docker push gcr.io/stream-originals/stream-originals-web
```