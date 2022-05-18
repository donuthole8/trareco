<template>
  <div class="main">
    <div class="search-box">
      <p>SearchBox called</p>

      <p>観光スポットや店を検索しよう！</p>

      <p>観光スポット・店名：<br>
      <input type="text" v-model="keyword"></p>
      <button @click="showSpots">検索</button>

      <table>
        <tr v-for="spot in filterdSpots" :key="spot.id">
            <td v-text="spot.id"></td>
            <td v-text="spot.name"></td>
            <td>
              <img src="spot.imageUrl" alt="">
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SearchBox',
  props: {
    msg: String
  },
  data() {
    return {
      keyword: "",
      spots: [{
        id: "",
        name: "",
        imageUrl: "",
      }]
    };
  },
  mothods: {
    computed: {
      // リアルタイム検索
      filterdSpots: function() {
        var spots = [];
        for (var i in this.spots) {
          var spot = this.spots[i];
          if (spot.name.indexOf(this.keyword) !== -1) {
            spots.push(spot)
          }
        }      
      },
      // スポット名の検索
      showSpots: function() {

      }
    }
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
