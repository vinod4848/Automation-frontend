/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    env: {
      api : 'http://localhost:5000'
    },
  }

  module.exports = nextConfig