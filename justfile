#!/usr/bin/env just --justfile

proto:
    protoc --go_out=./backend shared/dto/messages.proto
    cd frontend && chmod +x ./bin/generate-proto.sh && ./bin/generate-proto.sh