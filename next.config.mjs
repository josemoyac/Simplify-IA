import nextMDX from '@next/mdx';

const withMDX = nextMDX({ extension: /\.mdx?$/ });

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  pageExtensions: ['tsx', 'ts', 'mdx']
};

export default withMDX(nextConfig);
