<template>
  <div class="wrapper">
    <!-- <SearchBox></SearchBox> -->

    <Modal></Modal>

    <GoogleMap></GoogleMap>
  </div>
</template>

<script>
// import SearchBox from './SearchBox/SearchBox.vue'
import Modal from './Modal/Modal.vue'
import GoogleMap from './GoogleMap.vue'


export default {
  name: 'Main',
  components: {
    // SearchBox,
    Modal,
    GoogleMap,
  },
}
</script>

<style scoped>
@import "../styles.scss"
</style>
