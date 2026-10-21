module.exports = {
  apps: [
    {
      name: "practice-task",
      script: "dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
        AUTH_USER: "admin",
        AUTH_PASS: "password123",
      },
    },
  ],
};
