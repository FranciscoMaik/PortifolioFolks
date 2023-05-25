/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.ewzhub.com/:path*",
        basePath:  false,
        // source: "/hub/:path*",
        // destination: "https://www.ewzhub.com/:path*",
        // permanent: false
      }
    ]
  }
}
