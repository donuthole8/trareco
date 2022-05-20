<template>
  <div class="main">
    <div class="search-box">
      <p>観光スポットや店を検索しよう！</p>

      <p>観光スポット・店名：<br>
      <input type="text" v-model="keyword"></p>
      <button class="btn-search" @click="showSpots(keyword)">検索</button>
      <button class="btn-search" @click="test">表示</button>

      <h3>{{ keyword }}</h3>



      <p>{{ test }}</p>

      <!-- <table>
        <tr v-for="spot in filterdSpots" :key="spot.id">
            <td v-text="spot.id"></td>
            <td v-text="spot.spot_name"></td>
            <td>
              <img src="spot.image_url" alt="">
            </td>
        </tr>
      </table> -->
    </div>
  </div>
</template>


<script>
// import firebase from "firebase/app";
// import "firebase/database";

import axios from 'axios';

export default {
  name: 'SearchBox',
  data() {
    return {
      test: "test",
      keyword: "",
      spots: [{
        id: 0,
        spot_name: "",
        text: "",
        image_url: "",
      }],
    };
  },
  mounted() {
    var query = "東京"
    // データ読み込み
    const api_url = process.env.VUE_APP_GOOGLE_PLACE_URL + query + "&key=" + process.env.VUE_APP_GOOGLE_MAP_API_KEY;
  
    console.log("aaaa: ", api_url)

    axios
      .get(api_url)
      .then(response => (
        this.test = response
      ))
  },
  mothods: {
    // テスト
    test: function() {
      console.log("test suc!!!!!!!!!!!!!")
    },

    // スポット名の検索
    showSpots: function(keyword) {
      console.log("------------------")
      console.log(keyword)


      // データ読み込み


      // // データをDBに保存
      // firebase.database().ref("spots")
      //   .push({
      //     id: this.id,
      //     spot_name: this.spot_name,
      //   })
      // this.id += 1

      // // 検索ワードの表示
      // console.log("keyword--->>>", keyword)
      // this.key_word = keyword
    },
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
    },
  }
}
</script>


<style lang="scss" scoped>
.main {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
}
.btn-search {
  background: #61c1b3;
  color: #fffcdb;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
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
