/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: isGithubActions ? '/portfolio-me' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
