<template>
  <button class="btn-modal" @click="modalClick">写真を地図に登録する</button>
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
.btn-modal {
  background: #61c1b3;
  color: #fffcdb;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>