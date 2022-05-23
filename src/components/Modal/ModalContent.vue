<template>
  <div class="modal-wrap" :class="{ 'is-open': modalSwitch }">
    <div class="modal">
      <p class="modal-ttl">写真登録</p>
      <div class="modal-main">
        <p>写真を地図上のスポットに登録しよう！</p>
        <AddPhoto></AddPhoto>

        <!-- <ModalText></ModalText> -->
        <div class="modal-text">
          <p>簡単な説明を追加しよう！</p>
          <input type="text" v-model="text" placeholder="写真についてひとこと">

          <p v-if="spot_name != ''">{{ spot_name }}が選択されました</p>
          <p>{{ spot_name }}が選択されました</p>
        </div>

        <SearchBox
          @spot-name="spot_name = $event"
        ></SearchBox>

      </div>
      <div class="modal-btn-wrap">
        <button class="btn-modal-content" @click="modalClose">閉じる</button>
        <button class="btn-modal-content" @click="addPhoto(text)">登録</button>
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
      // image_url: "",
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
    // 思い出記録のDB追加
    addPhoto(text) {
      // id, spot-name, text, image-url, date -> travel-record
      // とりあえずid,text,dateあたりを挿入できれば良い
      
      // 最新のレコードのidを取得
      // var id = this.getLatestId()
      var id = 0
      id += 1

      // console.log("inputed-txt", text)
      firebase.database().ref("travel-record")
        .push({
          id: id,
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
.modal {
  overflow: auto;
  overflow: scroll;
  width: 85%;
  height: 85%;
  background: #fff;
  position: relative;
  padding: 20px;
  z-index: 200;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    transition: z-index 0.3s;
    &.is-open {
      z-index: 1;
      .modal {
        opacity: 1;
        visibility: visible;
      }
      .modal-overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($color: #000, $alpha: 0.6);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
  &-close {
    background: #1b58a6;
    color: #fff;
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
  &-ttl {
    font-size: 20px;
  }
  &-main {
    margin-bottom: 30px;
  }
  &-btn {
    &-wrap {
      text-align: center;
    }
  }
}
.btn-modal-content {
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
.modal-text {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dotted #3E5F80;
  border-radius: 5px;
}
</style>
