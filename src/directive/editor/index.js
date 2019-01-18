import Coder from '@/components/editor/editor-bash';
// Editor Plugin
const installer = (el, bindings) => {
  console.log('指令已经绑定到元素了');
  console.info(el);
  console.info("Bind", bindings);

  const blocks = el.querySelectorAll('pre code');
  console.info(blocks);
  blocks.forEach((block) => {
    console.info(block);

  });
};

const xx = {
  bind: (el, binding, vnode) => { //1-被绑定
    console.log("1-bind 被绑定");
    console.log("el:",el);
    console.log("binding:",binding);
    console.log("vnode:",vnode);
    el.style.color=binding.value;
  },
  inserted: (el, binding, vnode) => { //2-被插入
    console.log("2-inserted 被插入");
  },
    update: (el, binding, vnode) => { //3-更新
    console.log("3-update 更新");
  },
    componentUpdated: (el, binding, vnode) => { //4-更新完成
    console.log("4-componentUpdated 更新完成");
  },
    unbind: (el, binding, vnode) => { //5-解绑
    console.log("5-unbind 解绑");
  },
};

const install = (Vue) => {
  Vue.component('coder', Coder);
  Vue.directive('editor', xx);
};


if (window.Vue) {
  window.editor = xx;
  Vue.use(install); // eslint-disable-line
}

xx.install = install;

export default xx;
