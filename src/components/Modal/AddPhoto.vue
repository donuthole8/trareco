<template>
  <div class="main">
    <div class="search-box">
      <p>写真を選択して下さい</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPhoto',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.main {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
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
