import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD2l-XCLSwRasJHT2235f3RK9MuMImGpF0",
  authDomain: "trareco-ccb11.firebaseapp.com",
  databaseURL: "https://trareco-ccb11-default-rtdb.firebaseio.com",
  projectId: "trareco-ccb11",
  storageBucket: "trareco-ccb11.appspot.com",
  messagingSenderId: "102430406773",
  appId: "1:102430406773:web:1decd3d90e7f3f9a9ee03c",
  measurementId: "G-D3LV9CC9QW"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

