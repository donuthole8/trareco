<template>
  <div class="main">
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

#overlay {
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

</style>
