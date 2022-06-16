<template>
  <div>
    <h2>Google Map</h2>
    <div class="google-map" ref="map"></div>
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
      spot_data: [],
    };
  },
  methods: {
    // 地図を描画
    showMap() {
      const script = document.createElement('script');
      script.src = process.env.VUE_APP_GOOGLE_MAPS_URL + process.env.VUE_APP_GOOGLE_API_KEY;
      script.async = true;
      document.head.appendChild(script);

      const timer = setInterval(() => {
        if (window.google) {
          clearInterval(timer);
          var map = new window.google.maps.Map(this.$refs.map, {
            center: this.myLatLng,
            zoom: 12,
          });

          // DBの位置情報にマーカを表示
          let bounds = new window.google.maps.LatLngBounds();
          for (let i = 0; i < this.spot_data.length; i++) {
            // マーカの情報を指定
            var marker = new window.google.maps.Marker({
              position: this.spot_data[i].position,
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
                "<h3>名称：" + this.spot_data[i].spot_name + "</h3><br>" + 
                "<p>説明：" + this.spot_data[i].text + "</p><br>" + 
                "<img id='" + this.spot_data[i].key + "' src='' width=150>",
              maxWidth: 300
            });
            infowindow.open(this.map, marker);

            // infowindow.open(this.map);
            bounds.extend(marker.position);
          }
        }
      }, 500);
    },

    // 登録スポット一覧から取得した位置情報を現在地にセット
    setCurrentPosition(spot) {
      this.myLatLng = spot.position

      let timer = setInterval(() => {
        if(window.google) {
          clearInterval(timer);
          // マップの中心位置を指定
          this.map = new window.google.maps.Map(this.$refs.map, {
            center: spot.position,
            zoom: 12
          })

          // 位置情報にマーカを表示
          let bounds = new window.google.maps.LatLngBounds();
            const marker = new window.google.maps.Marker({
            position: spot.position,
            map: this.map
          });

          // 画像URLを取得
          var storageRef = firebase.storage().ref();
          const DownloadTask = storageRef.child("images/" + spot.photo_key);
          DownloadTask.getDownloadURL()
            .then(photo_url => {
              // imgタグのidをキーにしてsrcをセット
              document.getElementById(spot.photo_key).src = photo_url
            });

          // 吹き出しを表示
          console.log("infowindo")

          var infowindow = new window.google.maps.InfoWindow({
            content:
              "<h3>名称：" + spot.spot_name + "</h3><br>" + 
              "<p>説明：" + spot.text + "</p><br>" + 
              "<img id='" + spot.photo_key + "' src='' width=150>",
            maxWidth: 300
          });
          infowindow.open(this.map, marker);
          bounds.extend(marker.position);
        }
      })
    }
  },
  mounted() {
    // 登録スポット一覧からスポットデータを取得
    EventBus.$on("clicked_spot", this.setCurrentPosition)

    // DBの位置情報・データを変数に格納
    firebase.database().ref("travel-record")
      .on("value", snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          if (data[key].position != "") {
            this.spot_data.push({
              "spot_name": data[key].spot_name, 
              "text": data[key].text,
              "position": data[key].position,
              "key": key
            })
          }
        })
      })

    // 地図の描画
    this.showMap()
  },
};
</script>

<style>
@import "../styles.scss"
</style>
