/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'www.akamai.com',
            }
          ],
      }
}

module.exports = nextConfig
