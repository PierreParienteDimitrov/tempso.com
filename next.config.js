module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  },
  async headers() {
    return [
      {
        // Force-update config read by the mobile apps (see docs/app-config.md).
        source: "/app-config.json",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300, must-revalidate" }
        ]
      }
    ]
  }
}
