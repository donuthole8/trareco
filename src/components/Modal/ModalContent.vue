<template>
  <v-card class="modal-wrap" :class="{ 'is-open': switchModal }">

    <div class="modal">
        <v-toolbar
          color=var(--v-main-base)
        >
          <v-toolbar-title class="modal-title">思い出を登録</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          思い出を地図上に登録しよう！登録したい写真と同じ観光スポット・店名を検索すれば地図上に写真と簡単なテキストを保存できます！
        </v-card-text>

        <v-divider></v-divider>

        <div class="modal-main">
          <AddPhoto
            @photo-upload="file = $event"
          ></AddPhoto>

          <div class="wrapper">
            <v-text-field
              v-modal="text"
              prepend-icon="mdi-pencil-plus"
              label="写真の簡単な説明を追加しよう！"
              hide-details="auto"
            >
            </v-text-field>
          </div>

          <SearchBox
            @place-id="place_id = $event"
            @spot-name="spot_name = $event"
            @position="position = $event"
          ></SearchBox>
          <p v-if="spot_name != ''">"{{ spot_name }}"が選択されました</p>

        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div>
            <button class="modal-btn" @click="closeModal">閉じる</button>
            <button class="modal-btn" @click="addPhoto">登録</button>
          </div>
        </v-card-actions>
    </div>
    <div class="modal-overlay" @click="closeModal"></div>
  </v-card>
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
      file: null,
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
