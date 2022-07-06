<template>
  <button class="modal-btn modal-btn-up" @click="modalClick">写真を地図に登録する</button>
</template>

<script>
export default {
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
    };
  },
  methods: {
    modalClick() {
      this.childModalFlg = !this.modalFlg;
      this.$emit("modal-clicked", this.childModalFlg);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles.scss"
</style>