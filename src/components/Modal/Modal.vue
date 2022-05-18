<template>
  <div class="main">
    <p>modal called</p>

    <p>写真を地図に登録しよう！</p>

    <ModalButton 
      :modalFlg="modalFlg" 
      @modal-clicked="modalFlg = $event" 
    />
    
    <ModalContent
      :modalFlg="modalFlg"
      @modal-clicked="modalFlg = $event"
      :modalTtl="modalItems.modalTtl"
      :modalContent="modalItems.modalContent"
    />
  
  </div>
</template>

<script>
import ModalButton from './ModalButton.vue'
import ModalContent from './ModalContent.vue'

export default {
  name: 'Main',
  components: {
    ModalButton,
    ModalContent,
  },

  props: ["modalItems"],
  data() {
    return {
      modalFlg: false
    };
  }
}
</script>

<style scoped>
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
