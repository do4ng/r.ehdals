import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.heading = function (text, level, id) {
  const v = id.toLowerCase().replaceAll(' ', '-');
  const r = `<h${level} id="${v}"><a href="#${v}" style="display: inline;" class="h-sharp">#</a>${text}</h${level}>\n`;
  console.log(r);
  return r;
};

marked.setOptions({
  langPrefix: 'hljs language-',
  renderer: renderer,
  xhtml: true,
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
