#!/bin/zsh

sudo chown -R $(whoami):$(whoami) node_modules
bun install --frozen-lockfile --ignore-scripts
bunx --bun biome migrate --write
bunx -y playwright@latest install --with-deps chromium
