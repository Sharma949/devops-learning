# practice-task

Node.js + TypeScript application for DevOps practice.

## Structure

```
practice-task/
├── src/
│   └── index.ts          # App entry point
├── .env                  # Environment variables
├── .gitignore
├── ecosystem.config.cjs  # PM2 process manager config
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
