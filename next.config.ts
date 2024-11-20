import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", 
        hostname: "i.annihil.us",
        port: "", // Porta vazia significa que aceita a padrão para o protocolo.
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
