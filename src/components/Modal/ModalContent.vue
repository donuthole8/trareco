<template>
  <div class="modal-wrap" :class="{ 'is-open': switchModal }">
    <div class="modal">
      <p class="modal-title">写真登録</p>
      <div class="modal-main">
        <p>写真を地図上のスポットに登録しよう！</p>
        <AddPhoto
          @photo-upload="file = $event"
        ></AddPhoto>

        <!-- <ModalText></ModalText> -->
        <div class="wrapper">
          <p>簡単な説明を追加しよう！</p>
          <input type="text" v-model="text" placeholder="写真についてひとこと">
        </div>
        
        <SearchBox
          @place-id="place_id = $event"
          @spot-name="spot_name = $event"
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
// import axios from 'axios';

export default {
  name: "ModalContent",
  components: {
    AddPhoto,
    // ModalText,
    SearchBox,
  },
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
      // travel_record: [],
      place_id: "",
      spot_name: "",
      text: "",

      // photo_url: "",
      latest_id: 0,
      file: {}
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
      // 思い出記録のDB追加
      // id, spot-name, text, photo-url, date -> travel-record

      // 最新のレコードのidを取得
      // var id = this.getLatestId()
      var id = 0
      id += 1

      // console.log("inputed-txt", text)
      firebase.database().ref("travel-record")
        .push({
          id: id,
          place_id: this.place_id,
          spot_name: this.spot_name,
          text: this.text,
          date: new Date()
        })

      // 写真をDBに保存
      const photo_ref = "images/" + this.file.name
      const storageRef = firebase.storage().ref(photo_ref)
      storageRef.put(this.file).then(() => {})
    },


    // 最新のレコードのidを取得
    // getLatestId:async function() {
      // await axios.get(process.env.VUE_APP_TRAVEL_RECORD_URL).then((
      //   result => {
      //     console.log(result)
      //     // this.latest_id = max(result.data.id)
      //   }
      // ))

    getLatestId: function() {
      const db = firebase.firestore()

      db.collection("travel-record").where("id", "max").get().then(snap => {
        const data = []
        snap.forEach(d => {
          console.log("query-d:::", d)

          data.push(d.data())
          console.log("query-data:::", data)

          return data
        })
      })
    }
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
