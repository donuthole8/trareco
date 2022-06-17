import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

// Firebase接続情報
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig)

// イベントバス（非親子間でのデータ受け渡し）
const EventBus = new Vue()
export default EventBus

// Vue設定
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

