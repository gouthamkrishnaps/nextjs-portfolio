import path from 'path';
import { fileURLToPath } from 'url';

/** Required to mimic __dirname in ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: false, // Ensure image imports work
  },
  webpack: (config) => {
    // Add the alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'src/assets/images'),
    };
    return config;
  },
};

export default nextConfig;