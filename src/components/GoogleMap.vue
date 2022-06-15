<template>
  <div>
    <h2>Google Map</h2>
    <div class="google-map" ref="map"></div>
    <div>test:{{test}}</div>
  </div>
</template>

<script>
import EventBus from "../main";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default {
  data() {
    return {
      myLatLng: { lat: 34.2232114, lng: 132.3052488 },
      markers: [],
      spot_data: [],
      photo_url: "",

      test: ""
    };
  },
  methods: {
    // 登録スポット一覧から取得した位置情報を現在地にセット
    setCurrentPosition(position) {
      let timer = setInterval(() => {
        if(window.google) {
          clearInterval(timer);
          this.map = new window.google.maps.Map(this.$refs.map, {
            center: position,
            zoom: 12
          })
        }
      })
    }
  },
  mounted() {
    // 登録スポット一覧から位置情報を取得
    EventBus.$on("position", this.setCurrentPosition)

    // DBの位置情報・データをmarkersに格納
    firebase.database().ref("travel-record")
      .on("value", snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          if (data[key].position != "") {
            this.markers.push(data[key].position)
            this.spot_data.push({
              "spot_name": data[key].spot_name, 
              "text": data[key].text,
              "key": key
            })
          }
        })
      })

    // 地図を表示
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

        // DBの位置情報にマーカを表示
        let bounds = new window.google.maps.LatLngBounds();
        for (let i = 0; i < this.markers.length; i++) {
          // マーカの情報を指定
          const marker = new window.google.maps.Marker({
            position: this.markers[i],
            map: map
          });

          // 画像URLを取得
          var storageRef = firebase.storage().ref();
          const DownloadTask = storageRef.child("images/" + this.spot_data[i].key);
          DownloadTask.getDownloadURL()
            .then(photo_url => {
              document.getElementById(this.spot_data[i].key).src = photo_url;
            });

          // 吹き出しを表示
          var infowindow = new window.google.maps.InfoWindow({
            content:
              "<h3>名称：" + this.spot_data[i].spot_name + "</h3><br>"
              + "<p>説明：" + this.spot_data[i].text + "</p><br>"
              + "<img id='" + this.spot_data[i].key + "' src='" + this.photo_url + "' width=150>",
            maxWidth: 300
          });
          infowindow.open(this.map, marker);
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
