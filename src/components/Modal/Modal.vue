<template>
  <div class="wrapper">
    <p>写真を地図に登録しよう！</p>

    <ModalButton 
      :modalFlg="modalFlg" 
      @modal-clicked="modalFlg = $event" 
    />
    
    <ModalContent
      :modalFlg="modalFlg"
      @modal-clicked="modalFlg = $event"
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
  data() {
    return {
      modalFlg: false
    };
  }
}
</script>

<style scoped>
@import "../../styles.scss";
</style>
