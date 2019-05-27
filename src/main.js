// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjo-PiSUJlZxFZEP9bxWrDZQwTzc-BJtM",
  authDomain: "docker-console.firebaseapp.com",
  databaseURL: "https://docker-console.firebaseio.com",
  projectId: "docker-console",
  storageBucket: "docker-console.appspot.com",
  messagingSenderId: "850453417660",
  appId: "1:850453417660:web:b50f9c7067ed91a3"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

debug: (function (global) {
  global.firebase = firebase
})(window)