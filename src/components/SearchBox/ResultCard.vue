<template>
  <div class="main">
    <p>{{ spot_name }}</p>
    <p>{{ address }}</p>
    <img src="image_url" alt="no-image">
    <div style="background-image : url(image_url)">image</div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: ["spot_name", "address", "image_url"]
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
