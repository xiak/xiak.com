import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const installer = (el) => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
};

const install = (Vue) => {
  Vue.directive('highlight', installer);
};


if (window.Vue) {
  window.highlight = installer;
  Vue.use(install); // eslint-disable-line
}

installer.install = install;

export default installer;
