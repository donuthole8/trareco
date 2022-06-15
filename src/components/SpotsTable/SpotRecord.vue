<template>
  <div class="wrapper">
    <div class="spot-record" @click="sendPosition">
      <p>{{ spot_name }}: {{ text }}</p>
      <!-- <p>{{ date }}</p> -->
      <p></p>
    </div>
  </div>
</template>

<script>
import EventBus from '../../main.js';

export default {
  name: 'SpotRecord',
  props: ["spot_name", "text", "position"],
  methods: {
    // 親に位置情報を受け渡す
    sendPosition: function() {
      EventBus.$emit("position", this.position)
    }
  }
}
</script>

<style scoped>
@import "../../styles.scss"
</style>
