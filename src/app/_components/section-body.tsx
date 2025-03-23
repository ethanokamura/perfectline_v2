import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import markdownStyles from "./markdown-styles.module.css";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, remarkGfm, rehypeHighlight]}
      components={{
        // Customize elements with custom CSS classes
        h1: ({ node, ...props }) => (
          <h1 className={markdownStyles["markdown__h1"]} {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className={markdownStyles["markdown__h2"]} {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className={markdownStyles["markdown__h3"]} {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className={markdownStyles["markdown__h4"]} {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className={markdownStyles["markdown__h5"]} {...props} />
        ),
        h6: ({ node, ...props }) => (
          <h6 className={markdownStyles["markdown__h6"]} {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className={markdownStyles["markdown__p"]} {...props} />
        ),
        b: ({ node, ...props }) => (
          <b className={markdownStyles["markdown__b"]} {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className={markdownStyles["markdown__strong"]} {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className={markdownStyles["markdown__a"]} {...props} />
        ),
        code: ({ node, className, children, ...props }) => (
          <code
            className={`markdown__code ${className}`}
            {...props}
          >
            {children}
          </code>
        ),
        pre: ({ node, ...props }) => (
          <pre className={markdownStyles["markdown__pre"]} {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className={markdownStyles["markdown__ol"]} {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className={markdownStyles["markdown__ul"]} {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className={markdownStyles["markdown__li"]} {...props} />
        ),
        img: ({ node, ...props }) => (
          <img className={markdownStyles["markdown__img"]} {...props} />
        ),
      }}
    />
  );
};

export default MarkdownRenderer;
