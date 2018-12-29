<template>
  <div class="editor-go">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/mode/go/go.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
import './themes/go.css';

export default {
  name: 'EditorGo',
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data() {
    return {
      goEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.goEditor.getValue();
      if (value !== editorValue) {
        this.goEditor.setValue(value);
      }
    },
  },
  mounted() {
    this.goEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      tabSize: 4,
      styleActiveLine: true,
      lineNumbers: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      line: true,
      mode: 'text/x-go',
      theme: 'go',
    });
    this.goEditor.setValue(this.value);
    this.goEditor.on('change', (cm) => {
      this.$emit('changed', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.goEditor.getValue();
    },
  },
};
</script>
<style scoped>
  .editor-go >>> .CodeMirror {
    position: relative;
    height: 100%;
    width: 100%;
    line-height: normal;
    font-family: 'Monaco','Menlo','Ubuntu Mono','Consolas','source-code-pro',monospace;
    padding: 0;
    border-radius: 0;
    border: 0;
  }
</style>
