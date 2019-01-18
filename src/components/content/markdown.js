import marked from 'marked';
let renderer =  new marked.Renderer();
renderer.heading = (text, level) => {
  let escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `
<h${level}>
  <a name="${text}" class="anchor" href="#/${text}">
    <span class="header-link"></span>
  </a>
  ${text}
</h${level}>`;
};
renderer.image = (href, title, text) => {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};
marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});
export default marked;
