import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function(code) {
        return hljs.highlightAuto(code, ["html", "javascript", "css", "python", "bash", "c", "json", "markdown", "typescript"]).value;
    }
})

export function MarkedHTML(content) {
    return {__html: marked(content, {sanitize: true})};
}
export function Marked(content) {
    return marked(content, {sanitize: true});
}