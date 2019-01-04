import marked from 'marked';

let renderer =  new marked.Renderer();
renderer.heading = (text, level) => {
  return '<div class="h1"><h' + level + '>' + text + '</h' + level + '></div>\n';
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
