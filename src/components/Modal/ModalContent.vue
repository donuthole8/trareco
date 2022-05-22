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
        </div>

        <SearchBox
          @clicked-spot="spot_name = $event"
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
      // text: "",
      // image_url: "",
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
      var id = 0
      id += 1

      console.log("inputed-txt", text)
      firebase.database().ref("travel-record")
        .push({
          id: id,
          text: text,
          date: new Date()
        })
    },
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
</style>
