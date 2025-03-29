import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeShiki from '@shikijs/rehype';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parses markdown into an AST
    .use(remarkGfm) // Adds support for GitHub-flavored markdown (tables, task lists, etc.)
    .use(remarkMath) // Parses math formulas (LaTeX)
    .use(remarkRehype) // Converts remark AST to rehype AST
    .use(rehypeKatex) // Renders LaTeX equations
    .use(rehypeShiki, {
      theme: 'catppuccin-frappe',
      themes: {
        dark: 'catppuccin-frappe',
        light: 'catppuccin-latte',
      },
      defaultColor: "light",
      cssVariablePrefix: '--shiki-',
      wrap: true,
    }) // Adds syntax highlighting
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }) // Add target="_blank"
    .use(rehypeStringify) // Converts rehype AST to HTML string
    .process(markdown);

  return result.toString();
}