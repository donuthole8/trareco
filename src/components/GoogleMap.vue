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
      myLatLng: { lat: -34.397, lng: 150.644 },
    };
  },
  mounted() {
    const script = document.createElement('script');
    script.src = process.env.VUE_APP_GOOGLE_MAP_URL + process.env.VUE_APP_GOOGLE_MAP_API_KEY;
    script.async = true;
    document.head.appendChild(script);
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 8,
        });
        new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        });
      }
    }, 500);
  },
};
</script>

<style>
.google-map {
  margin: auto;
  padding: 0.5em 1em;
  border: solid 10px #61c1b3;
  border-radius: 5px;
  height: 500px;
  width: 750px;
}
</style>
