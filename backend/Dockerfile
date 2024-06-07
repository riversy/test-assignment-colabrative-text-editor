FROM golang:1.22.1-alpine AS builder

WORKDIR /app

RUN apk update && apk add ca-certificates && apk add tzdata
COPY go.mod go.sum ./

RUN go mod download
COPY . .
RUN go build -o main .

FROM scratch

ENV HTTP_LISTEN_ADDR=:8000
ENV HTTP_CORS=http://localhost:3000

COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /app/main /app/main

EXPOSE 8000

ENTRYPOINT ["/app/main"]
