import remarkGfm from 'remark-gfm'

export const remarkPlugins = [
  [remarkGfm, {
    tablePipeAlign: false,
    tableCellPadding: true,
    singleTilde: false
  }]
]
