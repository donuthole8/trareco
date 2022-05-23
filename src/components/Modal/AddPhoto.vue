<template>
  <div class="main">
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
.main {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
}
.preview-img-wrapper {
  position: relative;
}
.preview-img-close {
  position: absolute;
  cursor: pointer;
  background-color: white;
  color: coral;
  padding: 3px;
  border-radius: 2px;
}
.photo {
  margin: 10px;
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
