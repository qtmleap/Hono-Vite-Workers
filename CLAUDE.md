# CLAUDE.md

## Project Overview

Cloudflare Workers上で動作するフルスタックアプリケーションのテンプレート。

- **Frontend**: React + TailwindCSS + Shadcn/ui + TanStack Router
- **Backend**: Hono (OpenAPI対応) on Cloudflare Workers
- **Build**: Vite + @cloudflare/vite-plugin

## Commands

- `bun run dev` — 開発サーバー起動
- `bun run build` — ビルド (`CLOUDFLARE_ENV` でモード指定、デフォルト staging)
- `bun run deploy` — Cloudflare Workers へデプロイ

## Lint / Type Check

大きな変更を入れた際は、以下のチェックを必ず通すこと。

```sh
bunx tsc -b --noEmit        # 型チェック
bunx biome check src/        # lint + format チェック
```

## Runtime

- パッケージマネージャおよびランタイムは **Bun** を使用する
- `npx` / `npm` / `yarn` は使わず、`bunx` / `bun` を使うこと

## Validation / API

- バリデーションには **Zod** を使用する
- API通信には **Zodios** を使用する
- Zodスキーマは `schemas/*.dto.ts` にパスカルケースで定義する
