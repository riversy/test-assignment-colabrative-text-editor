FROM node:21 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
ARG VITE_WS_URI
RUN echo "VITE_WS_URI=$VITE_WS_URI" > .env

RUN npm run build

FROM node:21-slim

ENV VITE_WS_URI=http://localhost:8000/ws

RUN npm install -g serve
COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["serve", "-s", "/app/dist", "-l", "3000"]
