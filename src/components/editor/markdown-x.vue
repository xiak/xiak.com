<template>
  <div class="layout">
    <div class="editor">
      <button class="full-screen-btn btn btn-default">FULL</button>
      <div class="row">
        <div class="editor-main">
          <div class="editor-toolbar">
            <button class="btn btn-success round">Run</button>
          </div>
          <editor-go ref="goEditor" v-model="value"/>
        </div>
        <div class="console-main">
          <editor-markdown ref="markdownEditor" v-model="markedStr"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EditorGo from './editor-go';
import EditorMarkdown from './editor-markdown';

export default {
  name: 'Editor',
  components: {
    EditorGo,
    EditorMarkdown,
  },
  data() {
    const code =
`// Prime Sieve in Go.
// Taken from the Go specification.
// Copyright © The Go Authors.
package main
import "fmt"
// Send the sequence 2, 3, 4, ... to channel 'ch'.
func generate(ch chan<- int) {
for i := 2; ; i++ {
    ch <- i  // Send 'i' to channel 'ch'
}
}
// Copy the values from channel 'src' to channel 'dst',
// removing those divisible by 'prime'.
func filter(src <-chan int, dst chan<- int, prime int) {
for i := range src {    // Loop over values received from 'src'.
    if i%prime != 0 {
        dst <- i  // Send 'i' to channel 'dst'.
    }
  }
}
// The prime sieve: Daisy-chain filter processes together.
func sieve() {
    ch := make(chan int)  // Create a new channel.
    go generate(ch)       // Start generate() as a subprocess.
    for {
        prime := <-ch
        fmt.Print(prime, "")
        ch1 := make(chan int)
        go filter(ch, ch1, prime)
        ch = ch1
    }
}
func main() {
    sieve()
}
`;
    return {
      value: code,
      markedStr: '# This is H1 header',
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .layout {
    min-height: 100%;
  }
  .editor {
    min-height: 400px;
    position: absolute;
    height: 100vh;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    .full-screen-btn {
      top: 62px;
      right: 10px;
      position: absolute;
      z-index: 9;
    }
    .row {
      height: 100%;
    }
    &>.row {
      &>div {
        height: 100%;
        padding-top: 62px;
      }
    }
    .editor-main {
      background: white;
      width: 50%;
      float: left
    }
    .console-main {
      background: white;
      width: 50%;
      float: left
    }
    .editor-toolbar {
      position: relative;
      z-index: 6;
      padding: 0 10px 10px 0;
      -webkit-box-shadow: 0 3px 3px 0 rgba(0,0,0,0.08);
      box-shadow: 0 3px 3px 0 rgba(0,0,0,0.08);
    }
  }
  .btn {
    outline: none;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .btn-default {
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .round {
    border-radius: 1020px;
  }
  .left {
    float: left;
    width: 50%;
  }
  .right {
    float: right;
    width: 50%;
  }

</style>
