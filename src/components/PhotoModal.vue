<template>
  <div class="main">
    <p>PhotoModal called</p>

    <div>
      <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
      <Main
        :modalFlg="modalFlg"
        @modal-clicked="modalFlg = $event"
        :modalTtl="modalItems.modalTtl"
        :modalContent="modalItems.modalContent"
      />
    </div>
  </div>
</template>

<script>
import Main from './Main.vue';
import ModalButton from './ModalButton.vue';

export default {
  name: 'PhotoModal',
  components: {
    Main,
    ModalButton,
  },
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #333333;
  border-radius: 5px;
}
#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 1;
  
  /* 画面全体を覆う設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
#modal {
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
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
