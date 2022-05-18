<template>
  <div class="main">
    <div class="search-box">
      <p>AddPhoto called</p>

      <p>観光スポットや店を検索しよう！</p>
      <form action="#" method="post">
        <p>検索ワード：<br>
        <input type="text" name="spot-name"></p>
        <p><input type="submit" value="検索"></p>
      </form>
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
  border: 1px dotted #333333;
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
