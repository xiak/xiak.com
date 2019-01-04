<template>
  <div class="editor">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
import './themes/text.css';

export default {
  name: 'Editor',
  /* eslint-disable vue/require-prop-types */
  props: [
    'value',
  ],
  data() {
    return {
      editor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.editor.getValue();
      if (value !== editorValue) {
        this.editor.setValue(value);
      }
    },
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
      tabSize: 4,
      readOnly: this.readOnly || true,
      styleActiveLine: true,
      lineNumbers: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      line: true,
      mode: 'text/x-sh',
      theme: 'text',
    });
    this.editor.setValue(this.value);
    this.editor.on('change', (cm) => {
      this.$emit('changed', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.editor.getValue();
    },
  },
};
</script>
<style scoped>
  .editor {
    height: 100%;
  }
  .editor >>> .CodeMirror {
    width: 100%;
    height: 100%;
    padding: 0;
    line-height: inherit;
    font-family: inherit;
    border-radius: 5px;
  }
</style>
