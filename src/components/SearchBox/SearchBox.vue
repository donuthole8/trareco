<template>
  <div class="main">
    <p>観光スポットや店を検索しよう！</p>

    <p>観光スポット・店名：<br>
    <input type="text" v-model="keyword"></p>
    
    <button @click="showSearchResults(keyword)" class="btn-search">検索</button>

    <div class="result"  v-if="search_results[0].place_id != ''">
      <h3>"{{ keyword }}"の検索結果</h3>

      <table>
        <tr v-for="result in search_results" :key="result.place_id">
          <SpotCard
            :spot_name="result.spot_name"
            :address="result.address"
            :image_url="result.image_url"
          ></SpotCard>

        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import SpotCard from './ResultCard.vue';
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
      response: "",
      image: []
    }
  },
  methods: {
    // PlacesAPIからの検索結果を表示
    showSearchResults:async function(keyword) {
      // 配列の初期化
      this.search_results.splice(0)

      // Places APIのURL
      const places_api_url = process.env.VUE_APP_GOOGLE_PLACES_URL + keyword + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY;
    
      // Places APIのレスポンス
      await axios
        .get(places_api_url)
        .then(response => (
          this.response = response.data.results
        ))
        .catch(error => {
          console.log("Error with google places api", error)
        })

      // レスポンスを配列に格納
      if (this.response.length >= 1) {
        this.response.forEach(res => {
          // this.getImageUrl(res.photos[0].photo_reference)
          this.search_results.push({
            "place_id": res.place_id, 
            "spot_name": res.name, 
            "address": res.formatted_address, 
            "image_url": this.getImageUrl(res.photos[0].photo_reference)
            // "image_url": this.image
          })
        })
      }
    },
    // PlacesAPIのレスポンスから画像URLを取得
    getImageUrl: function(photo_ref) {
      // Photos APIのURL
      const photos_api_url = process.env.VUE_APP_GOOGLE_PHOTOS_URL + photo_ref + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY

      // // Photos APIのレスポンス
      // await axios
      //   .get(photos_api_url)
      //   .then(response => (
      //     this.image = response
      //     // return response.url
      //   ))
      //   .catch(error => {
      //     console.log("Error with google places api", error)
      //   })
      
      // return this.image

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
