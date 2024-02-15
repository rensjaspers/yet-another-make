import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  },
});
