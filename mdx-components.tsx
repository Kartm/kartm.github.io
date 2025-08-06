import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

const components = {
  img: (props) => (
    <Image
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
      {...(props as ImageProps)}
      width={1200}
      height={800}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components
}