<template>
  <div class="main">
    <p>観光スポットや店を検索しよう！</p>

    <div class="search-box">
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
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
