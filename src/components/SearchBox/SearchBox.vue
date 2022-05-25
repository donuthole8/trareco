<template>
  <div class="wrapper">
    <p>観光スポットや店を検索しよう！</p>

    <p>観光スポット・店名：<br>
    <input type="text" v-model="keyword" placeholder="観光スポット・店名"></p>    
    <button @click="showSearchResults(keyword)" class="btn">検索</button>

    <div class="result" v-if="search_results.length != 0">
      <h3>"{{ keyword }}"の検索結果 {{ search_results.length }}件</h3>
      <p v-if="search_results.length == 0">検索結果がありません</p>

      <div v-if="search_results.length != 0">
        <p>思い出を記録する場所を選ぼう！</p>

        <table>
          <tr v-for="result in search_results" :key="result.place_id">
            <!-- <ResultCard v-bind:class="{'selected-card': selected_id!=''}" -->
            <ResultCard
              :place_id="result.place_id"
              :spot_name="result.spot_name"
              :address="result.address"
              :image_url="result.image_url"
              :position="result.position"
              @place-id="$listeners['place-id']"
              @spot-name="$listeners['spot-name']"
              @position="$listeners['position']"
            ></ResultCard>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from './ResultCard.vue';
import axios from 'axios';

export default {
  name: 'SearchBox',
  components: {
    ResultCard
  },
  data() {
    return {
      keyword: "宮島",
      search_results: [],
      response: "",
      image: [],
      spot_name: "",
      position: null
      // selected_id: "",
    }
  },
  methods: {
    // PlacesAPIからの検索結果を表示
    showSearchResults:async function(keyword) {
      // 配列の初期化
      this.search_results = []

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
          this.search_results.push({
            "place_id": res.place_id, 
            "spot_name": res.name, 
            "address": res.formatted_address.substring(13), 
            "image_url": this.getImageUrl(res.photos[0].photo_reference),
            "position": res.geometry.location
          })
        })
      }
    },
    // PlacesAPIのレスポンスから画像URLを取得
    getImageUrl: function(photo_ref) {
      // TODO: アイコン画像の場合は容量オーバーによるエラーなので403エラーの場合の対処
      // TODO: 400エラーの場合もある

      // Photos APIのURL
      const photos_api_url = process.env.VUE_APP_GOOGLE_PHOTOS_URL + photo_ref + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY

      return photos_api_url
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles.scss";
</style>
