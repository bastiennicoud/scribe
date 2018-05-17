<script>
import { exec, init } from 'pell'

export default {
  name: 'PellEditor',
  mounted: () => {
    let editor = init({
      element: document.getElementById('pell-editor'),

      // <Function>, required
      // Use the output html, triggered by element's `oninput` event
      onChange: html => console.log(html),

      // <string>, optional, default = 'div'
      // Instructs the editor which element to inject via the return key
      defaultParagraphSeparator: 'p',

      styleWithCSS: true,
      actions: [
        'bold',
        'underline',
        {
          name: 'italic',
          result: () => exec('italic')
        }
      ]
    })
  }
}
</script>

<template>
  <div class="editor">
    <div id="pell-editor"></div>
  </div>
</template>

<style lang="scss">
@import '~pell/src/pell';

.editor {
  height: 600px;
  width: 600px;
  background-color: antiquewhite;
}
</style>
