<template>
  <div class="main">
    <p>観光スポットや店を検索しよう！</p>

    <p>観光スポット・店名：<br>
    <input type="text" v-model="keyword"></p>
    
    <button @click="showSearchResults(keyword)" class="btn-search">検索</button>

    <!-- TODO: 未検索状態で隠せるように -->
    <h3>"{{ keyword }}"の検索結果</h3>
    <!-- <p>{{ this.response }}</p> -->

    <!-- TODO: コンポーネント化 -->
    <table>
      <tr v-for="result in search_results" :key="result.place_id">
        <p>{{ result.spot_name }}</p>
        <img src=result.image_url alt="no-image">

        <SpotCard></SpotCard>

      </tr>
    </table>
  </div>
</template>

<script>
import SpotCard from './SpotCard.vue';
import axios from 'axios';

export default {
  name: 'SearchBox',
  components: {
    SpotCard
  },
  data() {
    return {
      keyword: "宮島",
      search_results: [{
        place_id: "",
        spot_name: "",
        address: "",
        image_url: "",
      }],
      response: ""
    }
  },
  methods: {
    // PlacesAPIからの検索結果を表示
    showSearchResults:async function(keyword) {
      // Places APIのURL
      const places_api_url = process.env.VUE_APP_GOOGLE_PLACES_URL + keyword + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY;
    
      // Places APIのレスポンス
      await axios
        .get(places_api_url)
        .then(response => (
          this.response = response.data.results,
          console.log("api-res", response.data.results)
        ))
        .catch(error => {
          console.log("Error with google places api", error)
        })
      
      // 初期値の空配列を削除
      if (this.search_results[0].place_id == "") {
        this.search_results.shift()
      }

      // レスポンスを配列に格納
      if (this.response.length >= 1) {
        this.response.forEach(res => {
          this.search_results.push({
            "place_id": res.place_id, 
            "spot_name": res.name, 
            "address": res.address, 
            "image_url": this.getImageUrl(res.photos[0].photo_reference)
          })
        })
      }
    },
    // PlacesAPIのレスポンスから画像URLを取得
    getImageUrl: function(photo_ref) {
      // Photos APIのURL
      const photos_api_url = process.env.VUE_APP_GOOGLE_PHOTOS_URL + photo_ref + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY

      return photos_api_url
    }
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
