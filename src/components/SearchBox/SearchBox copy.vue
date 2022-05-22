<template>
  <div class="main">
    <div class="search-box">
      <p>観光スポットや店を検索しよう！</p>

      <p>観光スポット・店名：<br>
      <input type="text" v-model="keyword"></p>
      <!-- <button class="btn-search" @click="showSpots(keyword)">検索</button>
      <button class="btn-search" v-on:click.native="pushhh">表示</button> -->
      <button @click="click">aaa</button>


      <h2>{{ call }}</h2>
      <h3>"{{ keyword }}"で検索</h3>

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

// import axios from 'axios';

export default {
  name: 'SearchBox',
  data() {
    return {
      pohot_test: "tesss",
      test: "test",
      keyword: "",
      call: "",
      spots: [{
        id: 0,
        place_id: "",
        address: "",
        spot_name: "",
        text: "",
        image_url: "",
        image_ref: ""
      }],
    };
  },
  // async mounted() {
  // async beforeMount() {
  //   var query = "アボカド"
  //   var photoreference = "Aap_uECc6IfCpMeh8QTl2bxP9n-xCuF4Ts2KomlWkRTwdlOuBnz5RGMtuUWjtAELuq4oOklWjUQMRcprT-NjTRbqkgGFVAkJZ0GxkVWv4bvmlr0shJOMHsU_BOXnnP7gCxPMRf-tObIACFuyo0aKQLVKPoi5Vy4xXtiwU0Og1a-zI9TGvxLz"
  //   // データ読み込み
  //   const places_api_url = process.env.VUE_APP_GOOGLE_PLACES_URL + query + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY;
  //   console.log(places_api_url)
  //   const photos_api_url = process.env.VUE_APP_GOOGLE_PHOTOS_URL + photoreference + "&key=" + process.env.VUE_APP_GOOGLE_API_KEY
  
  //   await axios
  //     .get(places_api_url)
  //     .then(response => (
  //       this.test = response.data.results[0]
  //     ))
  //     .catch(error => {
  //       console.log("Error with google places api", error)
  //     })
    
  //   if (this.test.length >= 1) {
  //     this.test.forEach(el => {
  //       console.log("el",el)
  //       this.spots.push({
  //         "id": 0, 
  //         "place_id": el.place_id, 
  //         "address": el.address, 
  //         "spot_name": el.name, 
  //         "text": "tes", 
  //         "image_url": photos_api_url
  //       })
  //     })
  //   }
  // },
  mothods: {
    // // スポット名の検索
    // showSpots: function(keyword) {
    //   console.log("------------------")
    //   console.log(keyword)

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
    // },
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
