/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.petpark.co.il",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kartynky.co.ua",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "p4.wallpaperbetter.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c4.wallpaperflare.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "happypik.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
