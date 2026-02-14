/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages のサブパス（リポジトリ名）に合わせて設定
  basePath: process.env.NODE_ENV === 'production' ? '/hacker-heuristics' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/hacker-heuristics/' : '',
};

export default nextConfig;
