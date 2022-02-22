module.exports = {
  apps: [
    {
      name: 'aws-ssr',
      script: './dist/index.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}