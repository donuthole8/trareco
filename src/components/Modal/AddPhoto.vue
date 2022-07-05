<template>
  <div class="wrapper">
    <div class="search-box">
      <p>登録する写真を選択しよう！</p>
      
      <!-- <input type="file" ref="preview" @change="addPhoto"> -->
      <v-file-input
        @change="addPhoto"
        ref="preview"
        chips
        multiple
        truncate-length="15"
      >
        <template v-slot:selection="{ text }">
          <v-chip
            color=var(--v-second-base)
            text-color=var(--v-text3-base)
          >
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>
      
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
      const $file = this.$refs.preview.$refs.input.files[0]
      this.photo_url = URL.createObjectURL($file);
      this.$refs.preview.value = "";
      this.$emit("photo-upload", $file)
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
