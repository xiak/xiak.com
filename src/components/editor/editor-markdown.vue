<template>
  <div class="editor-markdown">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/go/go';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';


export default {
  name: 'EditorMarkdown',
  /* eslint-disable vue/require-prop-types */
  props: ['markedStr'],
  data() {
    return {
      markdownEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.markdownEditor.getValue();
      if (value !== editorValue) {
        this.markdownEditor.setValue(value);
      }
    },
  },
  mounted() {
    this.markdownEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      tabSize: 4,
      styleActiveLine: true,
      lineNumbers: true,
      lineWrapping: false,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      line: true,
      mode: 'text/x-gfm',
      theme: 'default',
    });
    this.markdownEditor.setValue(this.markedStr);
    this.markdownEditor.on('change', (cm) => {
      this.$emit('changed', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.markdownEditor.getValue();
    },
  },
};
</script>
<style scoped>
  .editor-markdown >>> .CodeMirror {
    position: absolute;
    height: 100%;
    width: 100%;
    line-height: normal;
    font-family: 'Monaco','Menlo','Ubuntu Mono','Consolas','source-code-pro',monospace;
    padding: 0;
    border-radius: 0;
    border: 0;
  }
</style>
