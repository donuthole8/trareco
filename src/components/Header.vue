<template>
  <div class="header">
    <h1>Trareco</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #61c1b3;
  color: #fffcdb;
  border-radius: 5px;
}
h1 {
  margin: 10px;
  padding: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
