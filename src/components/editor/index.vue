<template>
  <div class="markdown-x">
    <div class="wrapper">
      <div class="markdown-x-editor">
        <textarea class="editor" v-model="markedStr"></textarea>
      </div>
      <div class="markdown-x-htmler" v-html="htmlStr"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'MarkdownX',
  data() {
    return {
      markedStr: '',
      htmlStr: '',
    };
  },
  method: {
  },
  watch: {
    markedStr(value) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
      });
      this.htmlStr = marked(value);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .markdown-x, .markdown-x * {
    box-sizing: border-box;
  }
  .markdown-x {
    margin: 50px;
    position: relative;
    height: 600px;
    .wrapper {
      position: absolute;
      line-height: 1;
      color: #181818;
      width: 100%;
      height: inherit;
      .markdown-x-editor {
        float: left;
        width: 50%;
        height: inherit;
        .editor {
          width: 100%;
          height: 100%;
        }
      }
      .markdown-x-htmler {
        float: left;
        width: 50%;
        height: inherit;
      }
    }
  }

</style>
