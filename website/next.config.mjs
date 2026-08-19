/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Directory URLs (`/ja/` -> `out/ja/index.html`) are what GitHub Pages serves
  // reliably; without this the export emits `ja.html` and every nested route
  // becomes a coin flip.
  trailingSlash: true,
  // GitHub Pages のサブパス（リポジトリ名）に合わせて設定
  basePath: process.env.NODE_ENV === 'production' ? '/hammurabi' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hammurabi/' : '',
};

export default nextConfig;
