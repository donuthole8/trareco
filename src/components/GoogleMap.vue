<template>
  <div>
    <h2>Google Map</h2>
    <div class="google-map" ref="map"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// import { getDatabase, ref, onValue} from "firebase/database";

export default {
  data() {
    return {
      myLatLng: { lat: 34.2232114, lng: 132.3052488 },
      markers: []
    };
  },
  mounted() {
    // DBの位置情報をmarkersに格納
    firebase.database().ref("travel-record")
      .on("value", snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          if (data[key].position != "") {
            console.log("data", data[key].position)
            this.markers.push(data[key].position)
          }
        })
      })

    const script = document.createElement('script');
    script.src = process.env.VUE_APP_GOOGLE_MAPS_URL + process.env.VUE_APP_GOOGLE_API_KEY;
    script.async = true;
    document.head.appendChild(script);
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 12,
        });

        // DBのいち情報にマーカーを表示
        let bounds = new window.google.maps.LatLngBounds();
        for (let i = 0; i < this.markers.length; i++) {
          console.log("mark",i)
          const marker = new window.google.maps.Marker({
            position: this.markers[i],
            map: map
          });
          bounds.extend(marker.position);
        }
      }
    }, 500);


},
};
</script>

<style>
@import "../styles.scss"
</style>
