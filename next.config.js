/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/hub/:path*",
        destination: "https://www.ewzhub.com/:path*",
        permanent: false
      }
    ]
  }
}
