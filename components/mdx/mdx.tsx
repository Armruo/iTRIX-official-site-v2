'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './link'
import PostImage from './image'
import Banner from './banner'
import Accordion from './accordion'
import ModalVideo from '../modal-video'
import PostTag from './tag'
import PostTable, { TableHead, TableBody, TableHeadRow, TableBodyRow, TableTh, TableTd } from './table'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner,
  Accordion,
  ModalVideo,
  Tag: PostTag,
  Table: PostTable,
  THead: TableHead,
  TBody: TableBody,
  ThRow: TableHeadRow,
  TbRow: TableBodyRow,
  Th: TableTh,
  Td: TableTd,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose text-lg text-gray-600 dark:text-gray-400 max-w-none prose-lg prose-p:leading-normal prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-teal-500 dark:prose-blockquote:border-gray-400 prose-blockquote:font-normal prose-blockquote:text-inherit">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
