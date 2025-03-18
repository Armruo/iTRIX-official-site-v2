import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

const NameSlugPair = defineNestedType(() => ({
  name: 'NameSlugPair',
  fields: {
    name: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },    
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImg: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ''),
    }
  },
}))

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
    },
    topic: {
      type: 'nested',
      of: NameSlugPair,
      required: true,
    },
    prev: {
      type: 'nested',
      of: NameSlugPair,
    },
    next: {
      type: 'nested',
      of: NameSlugPair,
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^docs\//, ''),
    }
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Doc],
  mdx: {
    remarkPlugins: [[remarkGfm, { singleTilde: false }]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
    ],    
  }
})