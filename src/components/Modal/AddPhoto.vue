<template>
  <div class="wrapper">
    <div class="search-box">
      <p>登録する写真を選択しよう！</p>

      <input ref="preview" type="file" @change="addPhoto">

      <div v-if="photo_url" class="preview-img">
        <div class="preview-img-close" @click="deletePreview">✕</div>
        <img :src="photo_url" alt="no-img" width="200" class="photo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPhoto',
  data() {
    return {
      photo_url: ""
    }
  },
  methods: {
    // 写真のアップロード
    addPhoto: function() {
      const file = this.$refs.preview.files[0];
      this.photo_url = URL.createObjectURL(file);
      this.$refs.preview.value = "";

    },
    // プレビューのキャンセル
    deletePreview: function() {
      this.photo_url = ""
      URL.revokeObjectURL(this.photo_url);
    }
  }
}
</script>

<style scoped>
@import "../../styles.scss"
</style>
