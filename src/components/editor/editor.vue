<template>
  <div class="editor-ground">
    <editor ref="editor" v-model="value" language="bash" readOnly=true />
  </div>
</template>


<script>
import editor from './editor-bash';

export default {
  name: 'Editor',
  components: {
    editor,
  },
  props: {
    code: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.code,
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .editor-ground {
    height: 100%;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  }
</style>
