import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBa4oFK-if1UUbPKwUN-7oUWNRt98aeL-Y",
  authDomain: "platzi-rooms-f5c0f.firebaseapp.com",
  databaseURL: "https://platzi-rooms-f5c0f.firebaseio.com",
  projectId: "platzi-rooms-f5c0f",
  storageBucket: "platzi-rooms-f5c0f.appspot.com",
  messagingSenderId: "595321704172",
  appId: "1:595321704172:web:6fb8ea0401c3f696c79fc9",
  measurementId: "G-DCN0DFHQ4Y"
};
// Initialize Firebase
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch("FETCH_USER", { id: store.state.authId });
    }
  }
}).$mount("#app");
