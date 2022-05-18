<template>
  <div class="main">
    <p>main called</p>
    <p>観光スポットや店を検索しよう！</p>

    <div class="search-box">
      <form action="#" method="post">
        <p>検索ワード：<br>
        <input type="text" name="spot-name"></p>
        <p><input type="submit" value="検索"></p>
      </form>
    </div>

    <div class="add-photo">
      <button @click="思い出作成">思い出作成</button>
      <div  v-show="showContent" v-on:click="closeModal" id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <p><button @click="登録">close</button></p>
          <p><button @click="戻る">close</button></p>
        </div>
      </div>
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

#overlay {
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

</style>
