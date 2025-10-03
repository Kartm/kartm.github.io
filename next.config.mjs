import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {rehypeGithubAlerts} from 'rehype-github-alerts'
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFigure from "@microflash/rehype-figure";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [rehypeGithubAlerts, rehypeSlug, rehypeAutolinkHeadings, rehypeFigure],
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)