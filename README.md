# practice-task

Node.js + TypeScript application for DevOps practice.

## Structure

```
practice-task/
├── public/
│   └── login.html                # Login page (served statically)
├── src/
│   ├── controllers/
│   │   └── auth.controller.ts    # Login handler (validates credentials)
│   ├── routes/
│   │   └── auth.routes.ts        # /login route definitions
│   ├── app.ts                    # Express app setup (middleware + routes)
│   └── index.ts                  # App entry point (starts server)
├── .env                          # Environment variables
├── .gitignore
├── ecosystem.config.cjs          # PM2 process manager config
├── package.json
├── README.md
└── tsconfig.json
```

## Commands

```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript to dist/
npm start          # Run compiled app
npm run dev        # Run in development mode
pm2 start ecosystem.config.cjs   # Run with PM2 (cluster mode)
```

## Endpoints

- `GET /` — basic status
- `GET /health` — health check (useful for load balancers / k8s probes)
- `GET /login` — serves the login page
- `POST /login` — validates credentials against `AUTH_USER` / `AUTH_PASS` env vars
