#!/bin/bash
NODE_IMAGE="node:16-slim"

echo "Starting a bash session inside the container..."
docker run --rm -it -v "$(pwd)":/app -w /app $NODE_IMAGE /bin/bash
