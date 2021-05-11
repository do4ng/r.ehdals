import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

marked.setOptions({
  langPrefix: 'hljs language-',
  renderer: renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code, [
      'html',
      'javascript',
      'css',
      'python',
      'bash',
      'c',
      'json',
      'markdown',
      'typescript',
      'jsx',
      'tsx',
      'js',
      'ts',
      'md',
      'svelte',
    ]).value;
  },
});

export function MarkedHTML(content) {
  return { __html: marked(content, { sanitize: true }) };
}
export function Marked(content) {
  return marked(content, { sanitize: true });
}
