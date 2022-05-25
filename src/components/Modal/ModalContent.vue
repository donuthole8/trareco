<template>
  <div class="modal-wrap" :class="{ 'is-open': switchModal }">
    <div class="modal">
      <p class="modal-title">写真登録</p>
      <div class="modal-main">
        <p>写真を地図上のスポットに登録しよう！</p>
        <AddPhoto
          @photo-upload="file = $event"
        ></AddPhoto>

        <div class="wrapper">
          <p>簡単な説明を追加しよう！</p>
          <input type="text" v-model="text" placeholder="写真についてひとこと">
        </div>

        <SearchBox
          @place-id="place_id = $event"
          @spot-name="spot_name = $event"
          @position="position = $event"
        ></SearchBox>
        <p v-if="spot_name != ''">"{{ spot_name }}"が選択されました</p>

        <div>
          <button class="btn" @click="closeModal">閉じる</button>
          <button class="btn" @click="addPhoto">登録</button>
        </div>

      </div>
    </div>
    <div class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import AddPhoto from './AddPhoto.vue';
import SearchBox from '../SearchBox/SearchBox.vue';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default {
  name: "ModalContent",
  components: {
    AddPhoto,
    SearchBox,
  },
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
      place_id: "",
      spot_name: "",
      position: "",
      text: "",
      file: null
    };
  },
  methods: {
    // モーダルフラグの変更
    switchChildModal() {
      if (this.modalFlg) {
        this.childModalFlg = true;
      } else {
        this.childModalFlg = false;
      }
      return this.childModalFlg;
    },
    // モーダルを閉じる
    closeModal() {
      if (this.childModalFlg) {
        this.childModalFlg = false;
        this.$emit("modal-clicked", this.childModalFlg);
      }
    },
    // 写真を登録
    addPhoto() {
      // レコードのキーを取得・レコードをDBに保存
      const key = firebase.database().ref("travel-record").push({
        place_id: this.place_id,
        spot_name: this.spot_name,
        position: this.position,
        text: this.text,
        date: String(new Date())
      }).key

      // 写真をDBに保存
      const photo_ref = "images/" + key
      const storageRef = firebase.storage().ref(photo_ref)
      storageRef.put(this.file).then(() => {})

      // アラート
      alert("写真を登録しました！")
    },
  },
  computed: {
    switchModal() {
      return this.switchChildModal();
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../styles.scss"
</style>
