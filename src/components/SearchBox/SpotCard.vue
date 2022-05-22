<template>
  <div class="main">
    <div>data dummy</div>
    <!-- <td v-text="result.spot_name"></td>
    <td>
      <img src=result.image_url alt="">
    </td> -->
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      keyword: "宮島",
      search_results: [{
        place_id: "",
        spot_name: "",
        address: "",
        image_url: "",
      }],
      response: []
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
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
