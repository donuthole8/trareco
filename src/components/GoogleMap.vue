<template>
  <div>
    <h2>Google Map</h2>
    <div class="google-map" ref="map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myLatLng: { lat: 34.2732114, lng: 132.3052488 },
      markers: [
        // ダミー
        { position: { lat: 34.2732114, lng: 132.3052488 } },
        { position: { lat: 34.2232114, lng: 132.2052488 } }
      ]
    };
  },
  mounted() {
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
        new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        });
        console.log("aaaaa")

        for (var i = 0; i < this.markers.length; i++) {
          new window.google.maps.Marker({
            position: this.markers[i].position,
            map,
          });
        }
      }
    }, 500);

    // let bounds = new window.google.maps.LatLngBounds();
    // const marker = new window.google.maps.Marker({
    //   position: {
    //     lat: this.markers.position.lat,
    //     lng: this.markers.position.lng
    //   },
    //   map: this.map
    // });
    // bounds.extend(marker.position);


  },
};
</script>

<style>
@import "../styles.scss"
</style>
