/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "fakestoreapi.com",
            port: "",
            pathname: "/img/**",
         },
      ],
   },
	typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
