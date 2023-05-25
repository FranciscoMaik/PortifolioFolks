/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/hub/:path*",
        destination: "https://www.ewzhub.com/:path*",
        basePath:  true,
        // source: "/hub/:path*",
        // destination: "https://www.ewzhub.com/:path*",
        // permanent: false
      }
    ]
  }
}
