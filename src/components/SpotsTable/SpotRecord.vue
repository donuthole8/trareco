<template>
  <div class="wrapper">
    <div class="spot-record">
      <p>{{ spot_name }}: {{ text }}</p>
      <!-- <p>{{ date }}</p> -->
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpotRecord',
  props: ["spot_name", "text", "date"],
}
</script>

<style scoped>
@import "../../styles.scss"
</style>
