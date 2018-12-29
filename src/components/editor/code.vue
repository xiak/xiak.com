<template>
  <div class="coder">
    <div class="coder-mirror">
      <textarea style="display: none;">
#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello World!\n";
}
      </textarea>
      <div class="CodeMirror cm-s-go coder-mirror-wrap">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coder',
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .coder-mirror-wrap {
    height: 100%;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }
  .CodeMirror {
    font-family: monospace;
    height: 300px;
    color: black;
    direction: ltr;
  }
  .cm-s-go {
    &.CodeMirror {
      color: #000000;
      background: #FFFFFF;
    }
  }
</style>
