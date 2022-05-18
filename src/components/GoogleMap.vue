<template>
<div>
  <h2>Google Map</h2>
  <div ref="map" style="height: 500px; width: 800px"></div>
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
    script.src = process.env.VUE_APP_GOOGLE_MAP_API_KEY;
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