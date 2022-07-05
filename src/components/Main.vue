<template>
  <div class="wrapper">
    <!-- <SearchBox></SearchBox> -->

    <div class="bar-space"></div>

    <Modal></Modal>

    <GoogleMap></GoogleMap>

    <SpotsTable></SpotsTable>
  </div>
</template>

<script>
// import SearchBox from './SearchBox/SearchBox.vue'
import Modal from './Modal/Modal.vue'
import GoogleMap from './GoogleMap.vue'
import SpotsTable from './SpotsTable/SpotsTable.vue'


export default {
  name: 'Main',
  components: {
    // SearchBox,
    Modal,
    GoogleMap,
    SpotsTable,
  },
}
</script>

<style scoped>
@import "../styles.scss"
</style>
