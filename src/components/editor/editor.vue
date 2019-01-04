<template>
  <div class="editor-ground">
    <editor ref="editor" v-model="value" language="go" readOnly=true />
  </div>
</template>


<script>
import editor from './editor-bash';

export default {
  name: 'Editor',
  components: {
    editor,
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
  .editor-ground {
    height: 100%;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  }
</style>
