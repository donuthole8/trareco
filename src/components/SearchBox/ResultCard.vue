<template>
  <div class="wrapper">
    <div class="result-card" @click="sendSpotName">
      <p>名称：{{ spot_name }}</p>
      <p>住所：{{ address }}</p>
      <p>ID：{{ place_id }}</p>
      <img :src="image_url" width=200 alt="no-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: ["place_id", "spot_name", "address", "image_url"],
  methods: {
    // 親にスポット名を受け渡す
    sendSpotName: function() {
      this.$emit("selected-id", this.place_id)
      this.$emit("spot-name", this.spot_name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles.scss"
</style>
