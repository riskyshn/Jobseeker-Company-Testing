/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobseeker.company",
        port: "",
        pathname: "/blog/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
