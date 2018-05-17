<template>
  <div id="app">
    <pell-editor/>
  </div>
</template>

<script>
import PellEditor from './components/PellEditor'

export default {
  name: 'App',
  components: {
    PellEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
