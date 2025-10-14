# Stream Originals

A project for managing and deploying the Stream Originals API and database using Docker and Google Cloud.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Docker - Database](#docker---database)
- [Docker - API](#docker---api)
- [Google Cloud Deployment](#google-cloud-deployment)
- [Environment Variables](#environment-variables)
- [Connecting to Remote Database](#connecting-to-remote-database)

---

## Getting Started

Clone the repository and ensure you have Docker and (optionally) Google Cloud SDK installed.

---

## DOCKER - DATABASE

### Start

```bash
docker compose up --build --detach &
```

### Stop

```bash
docker compose down -v --rmi local
```

---

## DOCKER - API

### Build the API Docker Image

```bash
docker build -f apps/api/Dockerfile -t stream-originals-api --no-cache --platform=linux/amd64 .
```

### Run the API Container

```bash
docker rm -f stream-originals-api || true && docker run --name stream-originals-api -p 8080:8080 stream-originals-api
```

---

## GOOGLE CLOUD DEPLOYMENT

### Authenticate with Google Cloud

```bash
gcloud auth login
```

### Tag and Push Docker Image

```bash
docker tag stream-originals-api gcr.io/stream-originals/stream-originals-api
docker push gcr.io/stream-originals/stream-originals-api
```

### Deploy to Cloud Run

After deploying to Cloud Run, configure Cloud SQL connections as described below.

---

## ENVIRONMENT VARIABLES

Set the `POSTGRES_URL` environment variable for database connectivity.

**Cloud SQL Example:**

```
POSTGRES_URL=postgres://myuser:mypassword@/mydatabase?host=/cloudsql/my-project:us-central1:my-instance
```

**Example for this project:**

```
POSTGRES_URL=postgres://postgres:password@/postgres?host=/cloudsql/stream-originals:us-central1:stream-originals-postgres
```

---

## CONNECTING TO REMOTE DATABASE LOCALLY

To connect to the remote database from your local machine:

```
POSTGRES_URL="postgres://postgres:password@104.197.84.134:5432"
```

---

## HOW TO INIT

RUN
http://localhost:8080/#tag/default/post/titles/init load in TITLES

http://localhost:8080/#tag/default/post/interests/init load in INTERESTS