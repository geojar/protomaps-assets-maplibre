#!/bin/bash
NODE_IMAGE="node:16-slim"

echo "Running npm build inside the container..."
docker run --rm -v "$(pwd)":/app -w /app $NODE_IMAGE npm run build
