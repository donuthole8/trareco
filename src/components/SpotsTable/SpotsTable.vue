<template>
  <div class="wrapper">
    <div class="added-spots">
      <p>登録された思い出の一覧です!</p>

      <li v-for="spot in spots" :key="spot.spot_name">
        <SpotRecord
          :spot_name="spot.spot_name"
          :text="spot.text"
          :position="spot.position"
          :photo_key="spot.photo_key"
        ></SpotRecord>
      </li>
    </div>
  </div>
</template>

<script>
import SpotRecord from './SpotRecord.vue';
import firebase from "firebase/app";
import "firebase/database";

export default {
  name: 'SpotsTable',
  components: {
    SpotRecord,
  },
  data() {
    return {
      spots: []
    }
  },

  mounted() {
  // DBの位置情報・データをmarkersに格納
  firebase.database().ref("travel-record")
    .on("value", snapshot => {
      const data = snapshot.val()
      Object.keys(data).forEach(key => {
        if (data[key].spot_name != "") {
          this.spots.push({
            "spot_name": data[key].spot_name,
            "text":      data[key].text,
            "position":  data[key].position,
            "photo_key": key,
          })
        }
      })
    })
  }
}
</script>

<style scoped>
@import "../../styles.scss"
</style>
