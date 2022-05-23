<template>
  <div class="main">
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
.result-card {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.selected-result-card {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: lightgreen;
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
