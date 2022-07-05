<template>
  <div class="spot-record" @click="sendPosition">
    <p>{{ spot_name }}</p>
  </div>
</template>

<script>
import EventBus from '../../main.js';

export default {
  name: 'SpotRecord',
  props: ["spot_name", "text", "position", "photo_key"],
  methods: {
    // 親に位置情報を受け渡す
    sendPosition: function() {
      EventBus.$emit("clicked_spot", {
        "spot_name": this.spot_name,
        "text":      this.text,
        "position":  this.position,
        "photo_key": this.photo_key,
      })
    }
  }
}
</script>

<style scoped>
@import "../../styles.scss"
</style>
