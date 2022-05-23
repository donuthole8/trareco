<template>
  <div class="modal-wrap" :class="{ 'is-open': modalSwitch }">
    <div class="modal">
      <p class="modal-ttl">写真登録</p>
      <div class="modal-main">
        <p>写真を地図上のスポットに登録しよう！</p>
        <AddPhoto
          @photo-upload="file = $emit"
        ></AddPhoto>

        <!-- <ModalText></ModalText> -->
        <div class="wrapper">
          <p>簡単な説明を追加しよう！</p>
          <input type="text" v-model="text" placeholder="写真についてひとこと">

          <p v-if="spot_name != ''">"{{ spot_name }}"が選択されました</p>
        </div>

        <SearchBox
          @spot-name="spot_name = $event"
        ></SearchBox>

      </div>
      <div class="modal-btn-wrap">
        <button class="btn" @click="modalClose">閉じる</button>
        <button class="btn" @click="addPhoto(spot_name, text)">登録</button>
      </div>
    </div>
    <div class="modal-overlay" @click="modalClose"></div>
  </div>
</template>


<script>
import AddPhoto from './AddPhoto.vue';
import SearchBox from '../SearchBox/SearchBox.vue';
import firebase from "firebase/app";
import "firebase/database";
import axios from 'axios';

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
      spot_name: "",
      text: "",
      // photo_url: "",
      latest_id: 0
    };
  },
  methods: {
    // モーダルフラグの変更
    childModalSwitch() {
      if (this.modalFlg) {
        this.childModalFlg = true;
      } else {
        this.childModalFlg = false;
      }
      return this.childModalFlg;
    },
    // モーダルを閉じる
    modalClose() {
      if (this.childModalFlg) {
        this.childModalFlg = false;
        this.$emit("modal-clicked", this.childModalFlg);
      }
    },
    addPhoto(spot_name, text) {
      // 思い出記録のDB追加
      // id, spot-name, text, photo-url, date -> travel-record
      // とりあえずid,text,dateあたりを挿入できれば良い
      
      // 写真をDBに保存
      // const file = {name: "aaa"}
      const storageRef = firebase.storage().ref("images/" + this.file.name)

      storageRef.put(this.file).then(() => {
        console.log("uploaddd!!!!!")
      })


      // 最新のレコードのidを取得
      // var id = this.getLatestId()
      var id = 0
      id += 1

      // console.log("inputed-txt", text)
      firebase.database().ref("travel-record")
        .push({
          id: id,
          spot_name: spot_name,
          text: text,
          date: new Date()
        })
    },
    // 最新のレコードのidを取得
    getLatestId:async function() {
      await axios.get(process.env.VUE_APP_TRAVEL_RECORD_URL).then((
        result => {
          console.log(result)
          // this.latest_id = max(result.data.id)
        }
      ))

      // const db = firebase.firestore()

      // db.collection("travel-record").where("id", "max").get(
      //   .then(())
      // )
    }
  },
  computed: {
    modalSwitch() {
      return this.childModalSwitch();
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../styles.scss"
</style>
