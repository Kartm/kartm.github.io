import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {rehypeGithubAlerts} from 'rehype-github-alerts'
import remarkNormalizeHeadings from "remark-normalize-headings";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true, // todo optimize
  },
  reactStrictMode: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkNormalizeHeadings
    ],
    rehypePlugins: [rehypeGithubAlerts, rehypeSlug, rehypeAutolinkHeadings],
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)