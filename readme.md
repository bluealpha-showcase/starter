# Starter Template

A modern, fullstack monorepo for building Cloudflare-native apps with React 19, Hono, Drizzle ORM, Turbo, Bun, Terraform, and more. Fast, type-safe, and production-ready.

Dev: [dev.starter.samyvs.com](https://dev.starter.samyvs.com)  
Prod: [starter.samyvs.com](https://starter.samyvs.com)


## Stack

- **Frontend:** React 19, TanStack Router/Query/Form, TailwindCSS, Vite
- **Backend/API:** Hono (Cloudflare Workers), Zod, custom auth, REST endpoints
- **Database:** Drizzle ORM, Neon (serverless Postgres)
- **Infra:** Terraform (Cloudflare, Neon, etc) in `infra/`
- **Email:** Resend, React Email
- **Monorepo:** Turbo, Bun, TypeScript, Biome


## Structure

```
apps/
  app/         # Main web app (React, Vite, Cloudflare Worker)
packages/
  api/         # Shared API logic/types (Hono routes, error handling)
  auth/        # Auth logic (GitHub, magic link, sessions)
  db/          # Drizzle ORM, schema, migrations, seed
  email/       # Email templates, Resend integration
  exception/   # Shared error types
  ui/          # React component library (Tailwind)
  tsconfig/    # Shared TS configs
infra/         # Terraform (Cloudflare, Neon, etc)
```


## Getting Started

1. **Install dependencies:**  
   ```sh
   bun install
   ```

2. **Set up environment:**  
   Create a `.dev.vars` file in `apps/app`. Fill in the secrets (see `apps/app/api/env.ts` for required vars or request from me).

3. **Dev server:**  
    This will start the app, email and database server.
   ```sh
   bun turbo run dev
   ```